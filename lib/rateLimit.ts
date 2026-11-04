interface RateLimitEntry {
  timestamps: number[];
}

const tracker = new Map<string, RateLimitEntry>();

// Keep memory clean
if (typeof global !== "undefined") {
  // Simple periodic cleanup of inactive IPs (older than 1 hour)
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of tracker.entries()) {
      const activeTimestamps = entry.timestamps.filter(t => now - t < 3600000);
      if (activeTimestamps.length === 0) {
        tracker.delete(ip);
      } else {
        tracker.set(ip, { timestamps: activeTimestamps });
      }
    }
  }, 600000); // every 10 minutes
}

export function rateLimit(
  ip: string, 
  limit: number, 
  windowMs: number
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const entry = tracker.get(ip) || { timestamps: [] };
  
  // Filter out timestamps outside the current window
  const activeTimestamps = entry.timestamps.filter(t => now - t < windowMs);
  
  if (activeTimestamps.length >= limit) {
    const oldestTimestamp = activeTimestamps[0];
    const resetTime = oldestTimestamp + windowMs;
    return {
      success: false,
      remaining: 0,
      reset: Math.max(0, Math.ceil((resetTime - now) / 1000)) // seconds remaining
    };
  }
  
  activeTimestamps.push(now);
  tracker.set(ip, { timestamps: activeTimestamps });
  
  return {
    success: true,
    remaining: limit - activeTimestamps.length,
    reset: Math.ceil(windowMs / 1000)
  };
}
