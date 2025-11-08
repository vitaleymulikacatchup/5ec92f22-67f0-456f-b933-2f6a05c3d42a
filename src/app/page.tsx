"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" }
          ]}
          brandName="Villa Amalfi"
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury on the Amalfi Coast"
          description="Discover unparalleled elegance at Villa Amalfi, where breathtaking coastal views meet sophisticated Italian hospitality. Immerse yourself in luxury overlooking the azure Mediterranean."
          imageSrc="https://pixabay.com/get/g1d92df02c8b52bf89abfe51b696771534338dc11e761dc5c2ec473163901910fa1e0496f42ec965c90d1900dbaa4d3d5d6bf722223b715ab8c7b47f6c19fa4c1_1280.jpg"
          imageAlt="Luxury Villa Amalfi with stunning Amalfi Coast views"
          imagePosition="right"
          buttons={[
            { text: "Reserve Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Villa Amalfi, we have created an sanctuary of refined luxury where every detail speaks to the art of Italian hospitality. Perched along the dramatic cliffs of the Amalfi Coast, our boutique hotel offers an intimate escape with panoramic views of the Mediterranean Sea and personalized service that exceeds every expectation."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="Luxury Amenities"
          description="Indulge in world-class amenities designed for the most discerning travelers"
          features={[
            {
              title: "Spa & Wellness",
              description: "Rejuvenate your senses in our award-winning spa featuring traditional Italian treatments and panoramic sea views",
              imageSrc: "https://pixabay.com/get/g4617fb443f7b4492e216ce0def7b54ac325db8fc813854b27018f52e86209edaa113e937b6a8671a8c6ad8456cba5b2ff08b01f5cb14794c36776f31aa2fc329_1280.jpg"
            },
            {
              title: "Fine Dining",
              description: "Savor authentic Mediterranean cuisine prepared by our Michelin-trained chefs using locally sourced ingredients",
              imageSrc: "https://pixabay.com/get/ga17230b6579a5bdf036c1d1f43dbf801683236179e2b6c0f042c06cfb5ba6b3fe36cd078cac13627fe7de6042c6ff2594b56e4260f4f6bffc35f3d7fe31b1c8d_1280.jpg"
            },
            {
              title: "Infinity Pool",
              description: "Relax in our stunning infinity pool that seems to merge seamlessly with the Mediterranean horizon",
              imageSrc: "https://pixabay.com/get/g6fecc8c16a40b570a5b7650a702e8547a14f39c215017f407db3135ddff4d2c66fa919ace7bd6b701906d4056464432faa2d87d3ba5d8b356e1f73c3a9837c4b_1280.jpg"
            },
            {
              title: "Concierge Services",
              description: "Our dedicated concierge team provides personalized assistance to create unforgettable experiences",
              imageSrc: "https://pixabay.com/get/g793291e26dfaff56f6f4f319fe6bf3ec23c0ff3894602282d0e686634b9a9412a205d63fd1ab848198a170f1cda13d529589b22aee21981dff8cd25bf17ad699_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Elegant Accommodations"
          description="Choose from our collection of luxury suites, each thoughtfully designed with Italian craftsmanship"
          products={[
            {
              id: "ocean-suite",
              brand: "Villa Amalfi",
              name: "Ocean View Suite",
              price: "€850/night",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://pixabay.com/get/g6ea8dfb263f90a1fabfa766e0531c67125d8c97f98075b5ca36848efa0e2c096acffe23e860522dcd361727806b6bf13396a4789e8e8fe3fbf39b1aa8f0fb989_1280.jpg"
            },
            {
              id: "garden-suite",
              brand: "Villa Amalfi",
              name: "Garden Terrace Suite",
              price: "€650/night",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://pixabay.com/get/gf6e395baaddf02d6cde22671ffa29d14cd6b18db7ee50dff7b94b5b87cb30afcb117fd4e96b19215ea4b5e521552c9edf5ce7b34477bb2ed019826c8a048a54b_1280.jpg"
            },
            {
              id: "premium-suite",
              brand: "Villa Amalfi",
              name: "Premium Coastal Suite",
              price: "€1,200/night",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://pixabay.com/get/gcff5693c1cb0e225aa92ca9a3957c23ca082fedbae1e9a939dfb0ec36bdb03cbb17615a3966cc048b0a4397b78a1f09a7f43bdd5f509c56b824bee270982075f_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover what our distinguished guests say about their stay"
          testimonials={[
            {
              id: "1",
              name: "Sophia Montecarlo",
              role: "Travel Photographer",
              company: "Luxury Escapes Magazine",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7fe97001eab911e26fafc5305a0bf18439d2023a3b41df7794264fbd6077f7f0ca56710c39f5af9a5110acc1ba3ae8cf627bfa01bf91c28df4ec9c359f03817f_1280.jpg"
            },
            {
              id: "2",
              name: "Alessandro Romano",
              role: "Executive",
              company: "Italian Fashion House",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g62a1e25845b7ee521be0714ebbf25fb2e492a5b61f428a479607255df591444eb4b0dbab00f503f45121dd2b72afa4825de44f96c5e43999d576ec0c201fdf02_1280.jpg"
            },
            {
              id: "3",
              name: "Isabella & Marco Rossi",
              role: "Anniversary Celebration",
              company: "Private Guests",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3c70b6de94561090a5213d3eaefc279866ed5e988485eb392244cf1c4217c9bc978e153e0e44c702f7ef0735e0bc1417dba97726680c029432fc76d0291af8ea_1280.jpg"
            },
            {
              id: "4",
              name: "Charlotte Beaumont",
              role: "Art Director",
              company: "European Gallery",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g372a054e383a294b3768c52c902fcabfb2ceee743c901fa5f4073cef4ae4dc5f812eadd4826aeb9675f2a6087cec15f76c08bfd400ec97d0c2338d7a089dda80_1280.jpg"
            },
            {
              id: "5",
              name: "Giovanni Benedetto",
              role: "Wine Curator",
              company: "Napa Collection",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge3707e95a2ab919054d055eacdcdef3175f1135651375c20018b4974586b0af5040dd3684279031ee88d052536dc3ccb5b1ac553a9dd10a7caaf05b223d5c3dc_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Begin Your Luxury Escape"
          description="Contact our reservations team to plan your perfect stay at Villa Amalfi. We look forward to welcoming you to the Amalfi Coast."
          imageSrc="https://pixabay.com/get/ge978add5e40e1903db3b966976cdc0a28117bbc086c790f8f654e06cc2dab312eafdef5e1a66915832a928593845b1ff5aa1c279abd91f92acc2148ad89aa8d1_1280.jpg"
          imageAlt="Villa Amalfi luxury hotel exterior"
          inputPlaceholder="Your email address"
          buttonText="Request Information"
          termsText="By submitting, you agree to receive information about Villa Amalfi. We respect your privacy and never share your details."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" },
                { label: "Transfers", href: "transfers" },
                { label: "Activities", href: "activities" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Phone: +39 089 123 4567", href: "tel:+390891234567" }
              ]
            }
          ]}
          logoText="Villa Amalfi"
          copyrightText="© 2025 Villa Amalfi | Luxury Hospitality"
        />
      </div>
    </ThemeProvider>
  );
}