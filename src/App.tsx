/*
 * The landing page: Tailark Dusk sections in order. Remove, reorder or add sections here.
 * Each section's text, images and links live in its own file in src/sections.
 */
import HeroSection from '@/sections/hero'
import LogoCloud from '@/sections/logo-cloud'
import PhotoFeatures from '@/sections/photo-features'
import Content from '@/sections/content'
import PipelineFeatures from '@/sections/pipeline-features'
import Stats from '@/sections/stats'
import Pricing from '@/sections/pricing'
import Testimonials from '@/sections/testimonials'
import FAQs from '@/sections/faqs'
import CallToAction from '@/sections/call-to-action'
import Footer from '@/sections/footer'

export default function App() {
    return (
        <>
            <HeroSection />
            <LogoCloud />
            <PhotoFeatures />
            <Content />
            <PipelineFeatures />
            <Stats />
            <Pricing />
            <Testimonials />
            <FAQs />
            <CallToAction />
            <Footer />
        </>
    )
}
