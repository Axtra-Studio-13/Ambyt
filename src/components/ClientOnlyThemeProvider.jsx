
// Create a separate component to mount ThemeProvider only on the client

"use client";

import { ThemeProvider } from "@/components/theme-provider";

export function ClientOnlyThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      suppressHydrationWarning
    >
      {children}
    </ThemeProvider>
  );
}
