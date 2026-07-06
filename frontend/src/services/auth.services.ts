import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification, } from "firebase/auth";
import type { User } from "firebase/auth";

interface AuthSuccess {
  success: true;
  user?: User;
  message?: string;
}

interface AuthFailure {
  success: false;
  message: string;

}

type AuthResponse = AuthSuccess | AuthFailure;

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong.";
};


export const register = async (email: string, password: string): Promise<AuthResponse> => {

  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(userCredential.user);

    return {
      success: true,
      user: userCredential.user,
      message: "Registration successful. Verification email sent.",
    };
  } catch (error: any) {

    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          success: false,
          message: " This account already exists. Go to login page ",
        };

      case "auth/invalid-email":
        return {
          success: false,
          message: "Please enter a valid email address.",
        };

      case "auth/weak-password":
        return {
          success: false,
          message: "Password must be at least 6 characters.",
        };

      default:
        return {
          success: false,
          message: error.message,
        };
    }
  }
};


export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    console.log(userCredential);

    if (!userCredential.user.emailVerified) {
      return {
        success: false,
        message: "check your mail for verification",
      };
    }

    return {
      success: true,
      message: "login Successful",
      user: userCredential.user,
    };
  } catch (error: any) {
    console.log(error)
    if (error.code === "auth/invalid-credential") {
      return {
        success: false,
        message: 'invalid mail or password'
      }
    }
    return {
      success: false,
      message: getErrorMessage(error),
    };
  }
};


export const logout = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);

    return {
      success: true,
      message: "Logged out successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: getErrorMessage(error),
    };
  }
};


export const resetPassword = async (email: string): Promise<AuthResponse> => {
  try {
    await sendPasswordResetEmail(auth, email);

    return {
      success: true,
      message: "Password reset email sent.",
    };
  } catch (error) {
    return {
      success: false,
      message: getErrorMessage(error),
    };
  }
};


export const resendVerificationEmail =
  async (): Promise<AuthResponse> => {
    try {
      if (!auth.currentUser) {
        throw new Error("No authenticated user found.");
      }

      await sendEmailVerification(auth.currentUser);

      return {
        success: true,
        message: "Verification email sent.",
      };
    } catch (error) {
      return {
        success: false,
        message: getErrorMessage(error),
      };
    }
  };