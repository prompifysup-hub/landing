import { Spotify } from '@/components/logos/spotify'
import { VercelFull } from '@/components/logos/vercel'
import { SupabaseFull } from '@/components/logos/supabase'
import { Hulu } from '@/components/logos/hulu'
import { Bolt } from '@/components/logos/bolt'
import { Beacon } from '@/components/logos/beacon'

export default function LogoCloud() {
    return (
        <section className="bg-background py-16">
            <div className="**:fill-muted-foreground relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 md:gap-x-16">
                <Bolt
                    height={22}
                    width={54}
                />
                <VercelFull
                    height={22}
                    width={84}
                />
                <SupabaseFull className="h-6" />
                <Hulu
                    height={18}
                    width={56}
                />
                <Spotify
                    height={26}
                    width={84}
                />
                <Beacon
                    height={24}
                    width={80}
                />
            </div>
        </section>
    )
}
