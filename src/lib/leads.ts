/*
 * Save a visitor's details (contact form, newsletter, booking request) to Prompify's `leads` table,
 * configured at runtime by /env-config.js (window.__PROMPIFY_CONFIG).
 *
 *   await saveLead({ name, email, message })
 */
type PrompifyConfig = { apiUrl?: string; chatId?: string; token?: string }

declare global {
    interface Window {
        __PROMPIFY_CONFIG?: PrompifyConfig
    }
}

export type Lead = {
    name?: string
    email: string
    phone?: string
    company?: string
    message?: string
    source?: string
}

export async function saveLead(lead: Lead): Promise<void> {
    const cfg = window.__PROMPIFY_CONFIG || {}
    if (!cfg.apiUrl || !cfg.chatId) {
        // Outside Prompify (local preview) there is nowhere to save; pretend it worked.
        console.info('Lead (not saved, preview mode):', lead)
        return
    }
    const res = await fetch(`${cfg.apiUrl}/${cfg.chatId}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cfg.token ?? ''}` },
        body: JSON.stringify(lead),
    })
    if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || `Could not send (HTTP ${res.status})`)
    }
}
