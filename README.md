# SignalsHQ Redesign — Premium B2B Tax Automation Platform

A high-fidelity redesign of [SignalsHQ](https://signalshq.io/), reimagined with a premium, technical B2B "document dossier" aesthetic. Built on a foundations of high-contrast layout, sharp edges, structured data ledgers, and highly focused micro-animations.

**🔗 Live Demo Link:** [https://signalshq-redesign-two.vercel.app/](https://signalshq-redesign.vercel.app)

---

## 🎨 Redesign Philosophy & Aesthetic

SignalsHQ is a smart tax automation platform built for CPA firms. The design philosophy of this project reflects the high stakes and analytical rigor of professional tax accounting:

1. **The "Case File / Dossier" Motif**: Inspired by physical paper files, folders, and tax documentation. The UI utilizes strict sharp edges (`rounded-none`), subtle hairline grids (`1px border-[#2C2C35]`), monospaced citation tags (`§`), and camera viewfinder crop marks to simulate indexing and focusing on verified facts.
2. **Restrained Color Palette**: Primary surfaces are pitch black (`#070709`) and dark carbon (`#0C0C0E`). Secondary fields are slate white (`#EAEAEF`). The accent color is a restricted, electric violet (`#9B84EA`) used strictly for visual hierarchy, focal elements, and interactive states.
3. **Typography for Precision**:
   - Headings: Clean, modern sans-serif (`Geist Sans`) for executive clarity.
   - Body: High-readability sans-serif (`Geist Sans`) for descriptions.
   - Data & Meta: Technical monospace (`Geist Mono`) for metrics, indexes, tags, and code elements.

---

## 🌟 Key Features & Redesigned Sections

* **Sticky Navigation Bar & Custom Registry Dropdown**:
  - Contains a hover-triggered `Resources` dropdown styled as a floating dossier index.
  - Features mechanical checkbox-bullet indicators that fill with brand violet on hover and an rotating arrow indicator.
  - Fully responsive mobile layout with smooth accordion drawers.
* **Hero (Focus-Align Entry)**:
  - Focuses on a centerpiece "California Tax Assist" memo file card slightly rotated.
  - Features viewfinder crop marks that slide outward to lock on screen load.
* **Product Walkthrough (Video Exhibit)**:
  - Embeds the core Signals product demonstration within a square browser chrome frame.
  - Anchored with viewport markers that focus-lock on enter.
* **Impact Metrics (Visual Constellation)**:
  - A double-column display mapping B2B statistics in a grid ledger beside a kinetic diagram representing common busy-season pain points.
  - SVG lines sequentially trace connections across grid coordinates on scroll.
* **Product Workflow (Interactive Progress Rail)**:
  - A responsive tracking line representing step-by-step progress dockets (Intake, Research, Review, Delivery) that highlights as the user steps through nodes.
* **Use Cases & Testimonials**:
  - Category stamp labels styled as overlapping document exhibits.
  - Cards feature camera bracket borders that slide outward to highlight the structure when hovered.
* **Security & Trust Checklist**:
  - Highlights SOC 2 Type II compliance standards and enterprise trust signals.
* **Secure Console Bottom CTA**:
  - Replaces generic forms with a terminal entry field styled like a secure dashboard command line, accompanied by micro-animations on interactive states.

---

## ⚡ Premium Interactions & Animations

* **Lenis Kinetic Scrolling**: Integrated global physical inertia scrolling to give page scroll wheels a buttery-smooth, organic weight.
* **Cursor Spotlight Glow**: A global tracking radial light follows the cursor coordinates on desktop, casting a subtle brand violet aura behind borders and text.
* **Staggered Viewport Entrances**: Viewport detection staggers the appearance of metrics and cards as they enter the screen, keeping the load feel elegant and light.

---

## 🛠️ Technical Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and `pnpm` (or `npm`) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JejurkarYash/signalshq-redesign.git
   cd signalshq-redesign
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or npm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   # or npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To compile a production bundle and run type checks:
```bash
pnpm run build
pnpm run start
```
