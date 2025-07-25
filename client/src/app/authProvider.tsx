/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { signUp, signIn, SignUpInput, SignInInput } from 'aws-amplify/auth';
import "@aws-amplify/ui-react/styles.css";

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

// Generate SECRET_HASH function
async function generateSecretHash(username: string): Promise<string> {
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

const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputprops: { required: true },
    },
    email: {
      order: 2,
      placeholder: "Enter your email address",
      label: "Email", 
      inputprops: { type: "email", required: true },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputprops: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      inputprops: { type: "password", required: true },
    },
  },
};

// Custom services with SECRET_HASH
const services = {
  async handleSignUp(formData: any) {
    try {
      const { username, password, attributes } = formData;
      const secretHash = await generateSecretHash(username);
      
      // Use Amplify's signUp with custom client request
      const signUpInput: SignUpInput = {
        username,
        password,
        options: {
          userAttributes: attributes,
          clientMetadata: {
            SECRET_HASH: secretHash
          }
        }
      };
      
      return await signUp(signUpInput);
    } catch (error) {
      console.error('SignUp error:', error);
      throw error;
    }
  },

  async handleSignIn(formData: any) {
    try {
      const { username, password } = formData;
      const secretHash = await generateSecretHash(username);
      
      // Use Amplify's signIn with custom client request
      const signInInput: SignInInput = {
        username,
        password,
        options: {
          clientMetadata: {
            SECRET_HASH: secretHash
          }
        }
      };
      
      return await signIn(signInInput);
    } catch (error) {
      console.error('SignIn error:', error);
      throw error;
    }
  }
};

const AuthProvider = ({ children }: any) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <Authenticator 
        formFields={formFields}
        services={services}
      >
        {({ user }: any) =>
          user ? (
            <div>{children}</div>
          ) : (
            <div>
              <h1>Please sign in below:</h1>
            </div>
          )
        }
      </Authenticator>
    </div>
  );
};

export default AuthProvider;