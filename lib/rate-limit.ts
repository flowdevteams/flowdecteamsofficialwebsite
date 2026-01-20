const ipRequestMap = new Map<string, { count: number; time: number }>()

export function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now()
  const record = ipRequestMap.get(ip)

  if (!record) {
    ipRequestMap.set(ip, { count: 1, time: now })
    return true
  }

  if (now - record.time > windowMs) {
    ipRequestMap.set(ip, { count: 1, time: now })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}
