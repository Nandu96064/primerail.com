import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  Car,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Globe,
  Layers,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Route,
  Search,
  Star,
  Train,
  Twitter,
  Users,
  Wrench,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "./hooks/useQueries";
import AdminPage from "./pages/AdminPage";
import ContentHub from "./pages/ContentHub";

const queryClient = new QueryClient();

// ─── Data ───────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    image: "/assets/primerail/closeup-goteik-viaduct-railway-myanmar.jpg",
    heading:
      "Rail Structure Interaction Studies for the Tallest Railway Bridge in the World",
    subtext: "Chenab Bridge USBRL Project",
    id: "slide-1",
  },
  {
    image: "/assets/primerail/trains-railroad-station.jpg",
    heading: "World Class Solutions for the Global Railway Market",
    subtext: "Hanoi Pilot Light Rail Project",
    id: "slide-2",
  },
  {
    image:
      "/assets/primerail/railroad-tracks-leading-industrial-area-transportation-theme-scaled.jpg",
    heading: "India's First Semi-High Speed Rail Project (180kmph)",
    subtext: "NCRTC RRTS Delhi-Ghaziabad-Meerut",
    id: "slide-3",
  },
  {
    image:
      "/assets/primerail/organizing-shipment-distribution-logistics-scaled.jpg",
    heading: "Vast Experience in Ballastless Track Engineering",
    subtext: "Hanoi Pilot Light Rail Project Track Works",
    id: "slide-4",
  },
  {
    image: "/assets/primerail/train-station-leisure-travel-commute.jpg",
    heading:
      "India's First High Speed Rail (350kmph) with Shinkansen Track Technology",
    subtext: "Mumbai Ahmedabad High Speed Rail Project T-2 Package",
    id: "slide-5",
  },
];

const services = [
  {
    icon: Search,
    title: "Prebid Engineering and Feasibility Studies",
    desc: "Comprehensive pre-bid analysis and feasibility assessments to ensure project viability and competitive edge.",
    image: "/assets/primerail/f1.jpg",
  },
  {
    icon: Layers,
    title: "Detailed Engineering – Civil, Structural, Track, Systems",
    desc: "Full lifecycle detailed engineering across civil, structural, track and systems disciplines.",
    image: "/assets/generated/service-detailed-engineering.dim_800x500.jpg",
  },
  {
    icon: CheckCircle,
    title: "Proof Checking / Independent Engineer",
    desc: "Third-party verification and independent engineering reviews for safety-critical infrastructure.",
    image: "/assets/primerail/f4.jpg",
  },
  {
    icon: Activity,
    title: "Field Investigations",
    desc: "On-site geotechnical, topographic and condition surveys to inform precise engineering decisions.",
    image: "/assets/generated/field-investigation-survey.dim_800x500.jpg",
  },
  {
    icon: BarChart3,
    title: "Noise & Vibration Studies",
    desc: "Advanced analysis of noise and vibration impacts for rail corridors in urban environments.",
    image: "/assets/generated/noise-vibration-rail.dim_800x500.jpg",
  },
  {
    icon: Wrench,
    title: "Track Technology Innovations",
    desc: "Cutting-edge track technology solutions including slab track, ballastless systems and high-speed applications.",
    image: "/assets/generated/track-technology-innovations.dim_800x500.jpg",
  },
];

const expertise = [
  {
    icon: Building2,
    title: "Metro",
    desc: "Route planning, feasibility studies, and detailed engineering services in the metro rail domain.",
    image: "/assets/generated/metro-detailed-engineering.dim_800x500.jpg",
  },
  {
    icon: Train,
    title: "Railways",
    desc: "Final location survey, detailed project report, site investigations, civil structural track designs, RSI studies.",
    image: "/assets/generated/railways-slab-track.dim_800x500.jpg",
  },
  {
    icon: Car,
    title: "Highways",
    desc: "Highway designs, alignment design, traffic studies, structural design, geotechnical studies.",
    image: "/assets/primerail/NCRTC-1.jpg",
  },
  {
    icon: Layers,
    title: "Detailed Engineering",
    desc: "Detailed design consultancy, typography and alignment, structural, civil, track, highway designs.",
    image: "/assets/generated/expertise-detailed-engineering.dim_800x500.jpg",
  },
  {
    icon: Globe,
    title: "Pre Bid Services",
    desc: "Pre bid services for metro, railways & highway projects with high success rate.",
    image: "/assets/generated/expertise-prebid-services.dim_800x500.jpg",
  },
  {
    icon: Route,
    title: "Urban Mobility Services",
    desc: "O&D studies, suburban rail, light rail solutions, last mile connectivity.",
    image: "/assets/generated/urban-mobility-services.dim_800x500.jpg",
  },
];

const leadershipTeam = [
  {
    name: "Suresh Babu Salla (IRSE-99)",
    photo: "/assets/team/suresh.png",
    role: "Managing Director and CEO",
    linkedin: "https://www.linkedin.com/in/suresh-babu-salla-92730323/",
  },
  {
    name: "Sujith Surendran",
    photo: "/assets/team/sujith.jpg",
    role: "Director (Engineering Services)",
    linkedin: "https://www.linkedin.com/in/sujith-surendran-5b4a8310/",
  },
  {
    name: "Sandupatla Mahesh Kumar (IRSE-95)",
    photo: "/assets/team/mahesh.jpg",
    role: "Director (CSS & Track)",
    linkedin:
      "https://www.linkedin.com/in/mahesh-kumar-sandupatla-irse-amie-civil-47b24853/",
  },
  {
    name: "Bhuvaneswara Rao",
    photo: "/assets/team/bhuvaneswara.jpg",
    role: "Director (Technical)",
    linkedin: "https://www.linkedin.com/in/bhuvaneswara-rao-980717119/",
  },
  {
    name: "Busireddy Prashanth Reddy",
    photo: "/assets/team/prashanth.png",
    role: "General Manager - Strategic Projects",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Gajendiran G",
    photo: "/assets/team/gajendiran.png",
    role: "Construction Support Services",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Priyanka Singh",
    photo: "/assets/team/priyanka.png",
    role: "Manager (Operations)",
    linkedin: "https://www.linkedin.com/in/priyanka-singh-109138288/",
  },
  {
    name: "Ankith Kumar C",
    photo: "/assets/team/ankit.png",
    role: "Manager (BD)",
    linkedin: "https://www.linkedin.com/in/ankith-vinay-a3b473a0/",
  },
  {
    name: "Nagaraj Ravindra Warad",
    photo: "/assets/team/nagaraj.jpg",
    role: "Manager (Finance & Accounts)",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shudhir Nath V.G",
    photo: "/assets/team/sudhir.png",
    role: "Design Manager (Transportation)",
    linkedin: "https://www.linkedin.com/in/sudhirnathvg/",
  },
];

const coreTeam = [
  {
    name: "Abhilash Yarragudi Reddy",
    photo: "/assets/team/abhilash.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/abhilashyarragudi",
  },
  {
    name: "Abhishek K",
    photo: "/assets/team/abhishek.png",
    role: "Sr. Design Engineer (Transportation)",
    linkedin: "https://www.linkedin.com/in/abhishekk39",
  },
  {
    name: "Akhil Johnson P J",
    photo: "/assets/team/akhil.png",
    role: "Electronics Engineer (R&D Projects)",
    linkedin: "https://www.linkedin.com/in/akhil-johnson-b367551a6",
  },
  {
    name: "Anna Maria Joseph",
    photo: "/assets/team/harsha.png",
    role: "Executive - Contracts & IPR",
    linkedin: "https://www.linkedin.com/in/anna-maria-joseph-2b7639362/",
  },
  {
    name: "Bhagyamma D N",
    photo: "/assets/team/bhagya.png",
    role: "Associate (Admin)",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Charan Chinthalapalli",
    photo: "/assets/team/charan.jpg",
    role: "Design Engineer",
    linkedin: "https://www.linkedin.com/in/chinthalapalli-charan-1626792a9",
  },
  {
    name: "Chiranth M V",
    photo: "/assets/team/chiranth.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/chiranth-m-v-1b05ab242/",
  },
  {
    name: "Dhrupad Prajapati",
    photo: "/assets/team/dhrupad.png",
    role: "Design Coordinator",
    linkedin: "https://www.linkedin.com/in/dhrupad-prajapati-91b65a366/",
  },
  {
    name: "Gajula Harshitha",
    photo: "/assets/team/harshitha.jpg",
    role: "Design Engineer",
    linkedin: "https://www.linkedin.com/in/harshitha-gajula-a658171a0/",
  },
  {
    name: "Hariharan",
    photo: "/assets/team/hariharan.png",
    role: "Design Engineer-Mechanical (R&D)",
    linkedin: "https://www.linkedin.com/in/hariharan-n-b22874227/",
  },
  {
    name: "Jai Surya N",
    photo: "/assets/team/jaisurya.jpg",
    role: "Structural Engineer (R&D Projects)",
    linkedin: "https://www.linkedin.com/in/jai-surya-n-196a53211/",
  },
  {
    name: "K C Krishna Reddy",
    photo: "/assets/team/krishna.png",
    role: "Office Driver",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Madhu Babu Salla",
    photo: "/assets/team/madhu.png",
    role: "Manager (Surveyor)",
    linkedin: "https://www.linkedin.com/in/madhu-babu-salla-82748b1a/",
  },
  {
    name: "Nandadeep",
    photo: "/assets/team/nandadeep.png",
    role: "AI/ML Intern",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Nidhi Prabhu K T",
    photo: "/assets/team/nidhi.png",
    role: "Structural Engineer",
    linkedin: "https://www.linkedin.com/in/nidhi-prabhu-k-t-b53044266/",
  },
  {
    name: "Ninitha Gokak",
    photo: "/assets/team/ninitha.png",
    role: "Sr. CAD Engineer",
    linkedin: "https://www.linkedin.com/in/ninitha-gokak-6a1171251/",
  },
  {
    name: "Prajwal L",
    photo: "/assets/team/prajwal.jpg",
    role: "Sr. Design Engineer (Transportation)",
    linkedin: "https://www.linkedin.com/in/prajwal-l-804a20190",
  },
  {
    name: "Rajesh S",
    photo: "/assets/team/rajeshs.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/rajesh-s-b07478298/",
  },
  {
    name: "Rangaswamy G",
    photo: "/assets/team/rajesh.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/rangaswamy-g-941347347/",
  },
  {
    name: "Ranjith R",
    photo: "/assets/team/ranjith.jpg",
    role: "IT (Executive)",
    linkedin: "https://www.linkedin.com/in/ranjith8/",
  },
  {
    name: "Saddam Khan",
    photo: "/assets/team/saddam.png",
    role: "Surveyor (CSS & Track)",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sarath Krishnan P",
    photo: "/assets/team/sarath.webp",
    role: "Production Engineer (R&D Projects)",
    linkedin: "https://www.linkedin.com/in/sarath-krishnan-p-4bb03a21b/",
  },
  {
    name: "Sharanya V",
    photo: "/assets/team/sharanya.webp",
    role: "Human Resources",
    linkedin: "https://www.linkedin.com/in/sharanya-v-b77236277/",
  },
  {
    name: "Shashank",
    photo: "/assets/team/shashank.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shilpa I Sobarad",
    photo: "/assets/team/shilpa.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/shilpa-sobarad-4973681bb/",
  },
  {
    name: "Sinchana H P",
    photo: "/assets/team/sinchana.jpg",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/sinchana-hp-sss/",
  },
  {
    name: "Suhera Fathima U",
    photo: "/assets/team/suhera.png",
    role: "Design Engineer",
    linkedin: "https://www.linkedin.com/in/suhera-fathima-u-a15827271/",
  },
  {
    name: "Suman S",
    photo: "/assets/team/suman.png",
    role: "CAD Engineer",
    linkedin: "https://www.linkedin.com/in/suman-gowda-242073219/",
  },
  {
    name: "Supriya",
    photo: "/assets/team/supriya.webp",
    role: "Sr. CAD Engineer",
    linkedin: "https://www.linkedin.com/",
  },
];
const testimonials = [
  {
    quote:
      "The quality of submission were up to the mark. Submittals were received in time. Very good working experience with Primerail Infralabs.",
    author: "P.K Ray",
    company: "ITD CEMENTATION INDIA",
  },
  {
    quote:
      "Prompt, excellent services provided with strong technical support as requested.",
    author: "Moses Sukumar",
    company: "APURUVAKIRTI INFRASTRUCTURE PVT LTD",
  },
  {
    quote:
      "The work quality and time management is excellent. We appreciate for the continuous support from prime rail even after the working hours.",
    author: "Rajesh Duggirala",
    company: "Patil Rail Infrastructure Pvt. Ltd",
  },
  {
    quote: "The quality of the services is very good and on time.",
    author: "Swaswata Das Mallick",
    company: "Rahee Infra Tech Limited",
  },
  {
    quote:
      "Prime rail are timely acting as per client requirement and sharing knowledge of load distribution calculation.",
    author: "B. Sai Raj",
    company: "RVNL",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Successfully" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Countries Served" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Prebid Engineering", href: "#services" },
      { label: "Detailed Engineering", href: "#services" },
      { label: "Field Investigations", href: "#services" },
      { label: "Noise & Vibration", href: "#services" },
    ],
  },
  {
    label: "Expertise",
    href: "#expertise",
    children: [
      { label: "Metro", href: "#expertise" },
      { label: "Railways", href: "#expertise" },
      { label: "Highways", href: "#expertise" },
      { label: "Urban Mobility", href: "#expertise" },
    ],
  },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

// ─── Avatar helper ────────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  "bg-[#0a2240]",
  "bg-[#d97706]",
  "bg-[#0d9488]",
  "bg-[#059669]",
  "bg-[#7c3aed]",
  "bg-[#1d4ed8]",
  "bg-[#b45309]",
  "bg-[#0891b2]",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) & 0xffffffff;
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function TeamMemberAvatar({ name, photo }: { name: string; photo?: string }) {
  const [imgError, setImgError] = useState(false);
  const color = getAvatarColor(name);
  const initials = getInitials(name);

  if (photo && !imgError) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-full h-full rounded-full object-cover object-top"
        onError={() => setImgError(true)}
      />
    );
  }
  return (
    <div
      className={`w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl ${color}`}
    >
      {initials}
    </div>
  );
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div
      className="bg-[#0a2240] text-white py-2 px-4 text-sm"
      data-ocid="topbar.section"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <a
            href="tel:+918043712000"
            className="flex items-center gap-1.5 text-white font-semibold hover:text-orange transition-colors"
            data-ocid="topbar.phone.link"
          >
            <Phone size={14} />
            +91 80 4371 2000
          </a>
          <a
            href="mailto:info@primerail.com"
            className="flex items-center gap-1.5 text-white font-semibold hover:text-orange transition-colors"
            data-ocid="topbar.email.link"
          >
            <Mail size={14} />
            info@primerail.com
          </a>
          <span className="hidden md:flex items-center gap-1.5 text-white/80">
            <MapPin size={14} />
            Bangalore, India
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/primerailinfralabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition-colors"
            data-ocid="topbar.facebook.link"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://x.com/primerail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition-colors"
            data-ocid="topbar.twitter.link"
          >
            <Twitter size={16} />
          </a>
          <a
            href="https://www.linkedin.com/company/primerail/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition-colors"
            data-ocid="topbar.linkedin.link"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.youtube.com/@primerailinfralabs9464/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition-colors"
            data-ocid="topbar.youtube.link"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          data-ocid="nav.logo.link"
        >
          <img
            src="/assets/uploads/image-2-1.png"
            alt="Primerail Infralabs Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="font-display font-bold text-navy text-lg leading-tight">
            Primerail
            <br />
            <span className="text-xs font-medium text-navy/60 tracking-wider uppercase">
              Infralabs
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.children ? (
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy/80 hover:text-orange transition-colors rounded-md hover:bg-orange/5"
                  data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy/80 hover:text-orange transition-colors rounded-md hover:bg-orange/5"
                  data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
                >
                  {link.label}
                </a>
              )}
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[180px] border border-border z-50">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-navy/70 hover:text-orange hover:bg-orange/5 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Admin link */}
        <a
          href="/admin"
          className="hidden lg:flex items-center gap-1.5 text-sm font-semibold bg-orange hover:bg-orange-hover text-white px-4 py-2 rounded-md ml-2 transition-colors"
          data-ocid="nav.admin.button"
        >
          Admin Panel
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-navy rounded-md hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.menu.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 text-sm font-medium text-navy hover:text-orange transition-colors rounded-md hover:bg-orange/5"
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/admin"
                className="px-3 py-2.5 text-sm font-semibold text-orange hover:bg-orange/5 transition-colors rounded-md"
                data-ocid="nav.mobile.admin.link"
              >
                Admin Panel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero Slider ─────────────────────────────────────────────────────────────

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning],
  );

  const prev = () =>
    goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = useCallback(
    () => goTo((current + 1) % heroSlides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[560px] overflow-hidden"
      data-ocid="hero.section"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity"
          style={{
            opacity: i === current ? 1 : 0,
            transitionDuration: "800ms",
          }}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                {heroSlides[current].subtext}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
                {heroSlides[current].heading}
              </h1>
              <a href="#about" data-ocid="hero.learn-more.button">
                <Button className="bg-orange hover:bg-orange-hover text-white font-semibold px-8 py-3 h-auto text-base rounded-md">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        data-ocid="hero.prev.button"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        data-ocid="hero.next.button"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-orange w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cyan-50" data-ocid="about.section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              About Us
            </p>
            <h2 className="text-4xl font-display font-bold text-black mb-6 leading-tight">
              India's Leading Railway Engineering Consultancy
            </h2>
            <p className="text-black/70 leading-relaxed mb-4">
              Primerail Infralabs is a premier railway engineering consultancy
              headquartered in Bangalore, India. With over 8+ years of
              experience, we deliver world-class solutions across metro rail,
              mainline railways, highways, and urban mobility projects.
            </p>
            <p className="text-black/70 leading-relaxed mb-6">
              Our team of seasoned engineers and domain experts brings deep
              technical expertise to every project, from feasibility studies and
              detailed engineering to proof checking and track technology
              innovations. We pride ourselves on delivering precision,
              reliability, and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#services" data-ocid="about.services.button">
                <Button className="bg-orange hover:bg-orange-hover text-white font-semibold px-6 py-2.5 h-auto rounded-md">
                  Our Services <ArrowRight size={15} className="ml-2" />
                </Button>
              </a>
              <a href="#contact" data-ocid="about.contact.button">
                <Button
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-2.5 h-auto rounded-md"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/primerail/1.jpg"
                alt="Primerail team at work"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange text-white p-5 rounded-xl shadow-lg">
              <p className="text-3xl font-display font-bold">15+</p>
              <p className="text-sm font-medium opacity-90">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-amber-50"
      data-ocid="services.section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-display font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            From feasibility studies to cutting-edge track technology, we offer
            a comprehensive suite of railway engineering services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="service-card bg-white rounded-xl shadow-card border border-amber-200 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-card-hover"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-3">
                  <service.icon size={20} className="text-orange" />
                </div>
                <h3 className="font-display font-bold text-black text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Expertise Section ────────────────────────────────────────────────────────

function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 bg-violet-100"
      data-ocid="expertise.section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Domains
          </p>
          <h2 className="text-4xl font-display font-bold text-black mb-4">
            Our Expertise
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Deep domain knowledge across key transportation infrastructure
            sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="expertise-card bg-white rounded-xl shadow-card border border-violet-200 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:border-orange"
              data-ocid={`expertise.item.${i + 1}`}
            >
              <div className="overflow-hidden h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-navy" />
                </div>
                <h3 className="font-display font-bold text-black text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ────────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-navy" data-ocid="stats.section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-display font-bold text-orange mb-2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team Section ─────────────────────────────────────────────────────────────

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-emerald-50" data-ocid="team.section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our People
          </p>
          <h2 className="text-4xl font-display font-bold text-black mb-4">
            Leadership Team
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Experienced professionals leading PrimeRail's vision across
            engineering, operations, and strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-16">
          {leadershipTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl p-5 shadow-card border border-emerald-200 text-center hover:shadow-card-hover transition-all duration-300"
              data-ocid={`team.leadership.item.${i + 1}`}
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 ring-2 ring-emerald-200">
                <TeamMemberAvatar name={member.name} photo={member.photo} />
              </div>
              <h4 className="font-display font-bold text-black text-sm leading-tight mb-1">
                {member.name}
              </h4>
              <p className="text-black/50 text-xs mb-3">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-navy hover:text-orange transition-colors"
                data-ocid={`team.leadership.linkedin.${i + 1}`}
              >
                <Linkedin size={12} /> LinkedIn
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display font-bold text-black mb-2">
            Core Team
          </h3>
          <p className="text-black/60 max-w-xl mx-auto text-sm">
            The dedicated engineers and specialists who make every project a
            success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {coreTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 10) * 0.04 }}
              className="bg-white rounded-xl p-4 shadow-card border border-emerald-100 text-center hover:shadow-card-hover transition-all duration-300"
              data-ocid={`team.core.item.${i + 1}`}
            >
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-3 ring-2 ring-emerald-100">
                <TeamMemberAvatar name={member.name} photo={member.photo} />
              </div>
              <h4 className="font-display font-bold text-black text-xs leading-tight mb-1">
                {member.name}
              </h4>
              <p className="text-black/50 text-xs mb-2">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-navy hover:text-orange transition-colors"
                data-ocid={`team.core.linkedin.${i + 1}`}
              >
                <Linkedin size={11} /> LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-yellow-50" data-ocid="testimonials.section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl font-display font-bold text-black mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-card p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <Star key={k} size={18} className="fill-orange text-orange" />
                ))}
              </div>
              <p className="text-black text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <p className="font-display font-bold text-black">
                {testimonials[active].author}
              </p>
              <p className="text-black/50 text-sm mt-1">
                {testimonials[active].company}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-orange w-6" : "bg-navy/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                data-ocid={`testimonials.tab.${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      await submitMutation.mutateAsync(form);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-sky-50"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-orange font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-display font-bold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-black/60 max-w-xl mx-auto">
            Have a project in mind? Reach out to our team of experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-black mb-6">
              Let's Work Together
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-orange" />
                </div>
                <div>
                  <p className="font-semibold text-black">Address</p>
                  <p className="text-black/60 text-sm mt-0.5">
                    Primerail Infralabs Pvt Ltd, Bangalore, Karnataka, India –
                    560001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-orange" />
                </div>
                <div>
                  <p className="font-semibold text-black">Phone</p>
                  <a
                    href="tel:+918043712000"
                    className="text-black/60 text-sm hover:text-orange transition-colors"
                  >
                    +91 80 4371 2000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-orange" />
                </div>
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a
                    href="mailto:info@primerail.com"
                    className="text-black/60 text-sm hover:text-orange transition-colors"
                  >
                    info@primerail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Users size={18} className="text-orange" />
                </div>
                <div>
                  <p className="font-semibold text-black">Follow Us</p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/company/primerail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-orange transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://x.com/primerail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-orange transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-card p-8 space-y-4"
              data-ocid="contact.form"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-black mb-1.5 block"
                >
                  Full Name *
                </label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  className="border-gray-200 text-black"
                  data-ocid="contact.name.input"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-black mb-1.5 block"
                  >
                    Phone
                  </label>
                  <Input
                    id="contact-phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="border-gray-200 text-black"
                    data-ocid="contact.phone.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-black mb-1.5 block"
                  >
                    Email *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="border-gray-200 text-black"
                    data-ocid="contact.email.input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-black mb-1.5 block"
                >
                  Message *
                </label>
                <Textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="border-gray-200 text-black"
                  data-ocid="contact.message.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-orange hover:bg-orange-hover text-white font-semibold py-3 h-auto rounded-md"
                data-ocid="contact.submit_button"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a2240] text-white" data-ocid="footer.section">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/image-2-1.png"
                alt="Primerail Infralabs"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div>
                <p className="font-display font-bold text-white text-lg leading-tight">
                  Primerail
                </p>
                <p className="text-white/50 text-xs tracking-wider uppercase">
                  Infralabs
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              India's leading railway engineering consultancy delivering
              world-class infrastructure solutions.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/primerail/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://x.com/primerail"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.facebook.com/primerailinfralabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@primerailinfralabs9464/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-white/60 text-sm hover:text-orange transition-colors"
                  >
                    {s.title.split(" – ")[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-orange"
                />
                Bangalore, Karnataka, India
              </li>
              <li>
                <a
                  href="tel:+918043712000"
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-orange transition-colors"
                >
                  <Phone size={15} className="text-orange" /> +91 80 4371 2000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@primerail.com"
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-orange transition-colors"
                >
                  <Mail size={15} className="text-orange" /> info@primerail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {year} Primerail Infralabs Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            &copy; {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <ExpertiseSection />
        <StatsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <ContentHub />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, adminRoute]),
});

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
