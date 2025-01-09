import "next-auth"; // Import the default NextAuth types

declare module "next-auth" {
  interface User {
    id?: string; // Custom user ID field
    token?: string; // Token from the backend
    accessToken?: string; // Access token for API calls
    idToken?: string; // ID token from identity providers
    name?: string; // User name
    googleId?: string; // Custom Google ID
    role?: string; // User role
    email?: string; // User email
    profilePicture?: string; // User profile picture URL
  }

  interface Session {
    user?: User; // Include extended User type
    accessToken?: string; // Access token for API calls
    idToken?: string; // ID token from identity providers
    expires?: string; // Session expiration time
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string; // Access token for API calls
    idToken?: string; // ID token from identity providers
    refreshToken?: string; // Refresh token for token renewal
  }
}

declare global {
  interface ProductCardProps {
    productName: string;
    originalPrice: number;
    currentPrice: number;
    discountPrice: number;
    discountPercentage: number;
    rating: number;
    productId: React.Key | null | undefined;
    productImage: string;
    productUrl?: string;
  }
  interface ProductsData {
    id: React.Key | null | undefined;
    name: string;
    originalPrice: number;
    currentPrice: number;
    ratingsAverage: number;
    images: Array<Image>;
    discountPercentage: number;
    url: string;
    discountPrice: number;
    productDescription?: string;
  }
}

// Export nothing to ensure this file is treated as a module.
export {};
