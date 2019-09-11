import {createContext, useContext} from 'react';
import cookies from "next-cookies";
import fetch from "isomorphic-unfetch";
import getConfig from 'next/config';

export function login() {
  window.location = '/login';
}

export function logout() {
  window.location = '/logout';
}

export async function loadUser({ ctx }) {
  let profile;
  let authHeaders;
  const {token} = cookies(ctx);
  if (token) {
    authHeaders = {
      Authorization: `Bearer ${token}`
    };
    const {publicRuntimeConfig} = getConfig();

    const res = await fetch(`${publicRuntimeConfig.apiBaseUrl}/me`, {
      method: 'GET',
      headers: {...authHeaders}
    });

    if (res.ok) {
      profile = await res.json();
    }
  }

  return {profile, authHeaders}
}

const UserContext = createContext();

export function useProfile() {
  return useContext(UserContext).profile;
}

export function useAuthHeaders() {
  return useContext(UserContext).authHeaders;
}

export default UserContext;