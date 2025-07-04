import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-blue-50 dark:bg-black">

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center flex flex-col items-center">
                  <div className="mb-3">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition duration-300 hover:scale-110" />
                  </div>
                  <div className="text-xl font-semibold text-gray-800 dark:text-white">
                    {stat.value}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>




      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-background transition-colors"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Everything you need to manage your finances
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl shadow-md bg-card text-card-foreground transition transform hover:shadow-xl hover:-translate-y-1 group"
              >
                <CardContent className="space-y-5 pt-4">
                  <div className="text-primary text-4xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section className="py-20 bg-blue-50 text-gray-800 dark:bg-zinc-950 dark:text-white transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 dark:bg-black dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white dark:bg-black transition-colors">

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Smarter Spending Starts Now
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Take control of your expenses, stay on budget, and make every rupee count — with SpendSmart, free forever.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Get Started — No Cost, No Catch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
