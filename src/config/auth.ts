// Authentication configuration
export const AUTH_CONFIG = {
  // Change this password to secure your site
  PASSWORD: 'writer2024',
  
  // Toggle password protection on/off
  PROTECTION_ENABLED: true,
  
  // Session storage key
  SESSION_KEY: 'alex_mejia_auth',
  
  // Admin toggle key (for easy enable/disable)
  ADMIN_TOGGLE_KEY: 'alex_mejia_admin_toggle'
};

// Hash function for basic password security
export function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check if protection is disabled by admin
  const adminToggle = sessionStorage.getItem(AUTH_CONFIG.ADMIN_TOGGLE_KEY);
  if (adminToggle === 'disabled') return true;
  
  // Check if protection is enabled in config
  if (!AUTH_CONFIG.PROTECTION_ENABLED) return true;
  
  // Check session
  const session = sessionStorage.getItem(AUTH_CONFIG.SESSION_KEY);
  return session === 'authenticated';
}

// Authenticate user
export function authenticate(password: string): boolean {
  const hashedInput = simpleHash(password);
  const hashedPassword = simpleHash(AUTH_CONFIG.PASSWORD);
  
  if (hashedInput === hashedPassword) {
    sessionStorage.setItem(AUTH_CONFIG.SESSION_KEY, 'authenticated');
    return true;
  }
  return false;
}

// Logout user
export function logout(): void {
  sessionStorage.removeItem(AUTH_CONFIG.SESSION_KEY);
}

// Admin functions
export function toggleProtection(enabled: boolean): void {
  if (enabled) {
    sessionStorage.removeItem(AUTH_CONFIG.ADMIN_TOGGLE_KEY);
  } else {
    sessionStorage.setItem(AUTH_CONFIG.ADMIN_TOGGLE_KEY, 'disabled');
  }
}

export function isProtectionEnabled(): boolean {
  const adminToggle = sessionStorage.getItem(AUTH_CONFIG.ADMIN_TOGGLE_KEY);
  return adminToggle !== 'disabled' && AUTH_CONFIG.PROTECTION_ENABLED;
}