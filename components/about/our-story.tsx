"use client"

import { Target, Lightbulb, TrendingUp } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Story Content */}
          <div>
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From Garage Startup to Global Agency
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, Flowdev Teams began with a simple mission: to help businesses 
                  succeed in the digital age. What started as a small team of three passionate 
                  developers has grown into a full-service digital agency with a global presence.
                </p>
                <p>
                  Over the years, we have had the privilege of working with startups, 
                  Fortune 500 companies, and everything in between. Each project has taught 
                  us something new and helped us refine our craft.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace new technologies, and 
                  deliver solutions that make a real difference for our clients and their users.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Mission, Vision, Goal */}
          <div className="space-y-6">
            <AnimatedSection animation="fade-in-right" delay={100}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with cutting-edge digital solutions that drive 
                  growth, enhance user experiences, and create lasting value.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading digital partner for innovative businesses worldwide, 
                  known for our creativity, reliability, and transformative results.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Goal</h3>
                <p className="text-muted-foreground">
                  To continuously innovate and deliver exceptional digital experiences 
                  that help our clients stay ahead in an ever-evolving digital landscape.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
