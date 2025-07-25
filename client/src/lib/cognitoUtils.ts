import { createHmac } from 'crypto';

export function generateSecretHash(username: string): string {
  const clientId = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!;
  const clientSecret = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_SECRET!;
  
  return createHmac('SHA256', clientSecret)
    .update(username + clientId)
    .digest('base64');
}

// For browser environment (if crypto is not available)
export async function generateSecretHashBrowser(username: string): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!;
  const clientSecret = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_SECRET!;
  
  const encoder = new TextEncoder();
  const keyData = encoder.encode(clientSecret);
  const messageData = encoder.encode(username + clientId);
  
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('HMAC', key, messageData);
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}