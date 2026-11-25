import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Zap, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Plus, 
  Minus, 
  Trash2, 
  CheckCircle2, 
  SlidersHorizontal, 
  ChevronRight,
  BatteryCharging,
  Sun,
  Cpu,
  Cable,
  Sparkles,
  Check,
  ExternalLink
} from 'lucide-react';

/**
 * COMPOSANT LOGO OFFICIEL VOLTUS
 * Reproduction vectorielle haute précision de l'emblème 'V' angulaire
 * Couleurs : Bleu Nuit Obsidienne (#0B111E) & Bleu Électrique (#1877F2)
 */
const VoltusLogo = ({ className = "h-8", showText = true, lightMode = false }) => {
  const primaryColor = lightMode ? "#FFFFFF" : "#0B111E";
  const accentColor = "#1877F2";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblème Géométrique V */}
      <svg 
        viewBox="0 0 120 100" 
        className="h-full w-auto overflow-visible" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo VOLTUS"
      >
        {/* Triangle d'accent Bleu Électrique (Aile gauche inférieure) */}
        <polygon 
          points="18,32 50,43 63,82" 
          fill={accentColor} 
        />
        {/* Corps principal 'V' Obsidienne */}
        <path 
          d="M4 16 L66 16 C72 16 75 20 77 26 L80 35 L95 16 L116 16 L69 94 L53 40 L4 16 Z" 
          fill={primaryColor} 
        />
      </svg>

      {/* Typographie VOLTUS */}
      {showText && (
        <span 
          className={`font-black tracking-[0.18em] text-xl sm:text-2xl uppercase leading-none ${
            lightMode ? 'text-white' : 'text-[#0B111E]'
          }`}
          style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}
        >
          VOLTUS
        </span>
      )}
    </div>
  );
};

/**
 * ILLUSTRATION SVG PERSONNALISÉE PAR PRODUIT
 * Rendu visuel industriel / hardware haute définition (zéro dépendance externe cassable)
 */
const ProductIllustration = ({ type, accent = "#1877F2" }) => {
  switch (type) {
    case 'solar-panel':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          <defs>
            <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B111E" />
              <stop offset="50%" stopColor="#162442" />
              <stop offset="100%" stopColor="#0B111E" />
            </linearGradient>
          </defs>
          {/* Cadre Aluminium */}
          <rect x="45" y="25" width="210" height="290" rx="8" fill="#1E293B" stroke="#94A3B8" strokeWidth="4" />
          <rect x="55" y="35" width="190" height="270" rx="4" fill="url(#solarGrad)" />
          {/* Cellules Monocristallines */}
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={63 + col * 60}
                y={43 + row * 52}
                width="54"
                height="46"
                rx="3"
                fill="#0F172A"
                stroke="#1877F2"
                strokeOpacity="0.45"
                strokeWidth="1.2"
              />
            ))
          )}
          {/* Reflet énergétique */}
          <path d="M55 35 L165 35 L95 305 L55 305 Z" fill="#1877F2" fillOpacity="0.08" />
          <circle cx="150" cy="170" r="22" fill="#0B111E" stroke="#1877F2" strokeWidth="2" />
          <path d="M152 158 L143 171 H151 L148 182 L158 169 H150 L152 158 Z" fill="#1877F2" />
        </svg>
      );

    case 'power-station':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          {/* Poignée supérieure */}
          <path d="M85 85 V65 C85 55 93 48 103 48 H197 C207 48 215 55 215 65 V85" stroke="#0B111E" strokeWidth="14" strokeLinecap="round" fill="none" />
          {/* Boîtier robuste */}
          <rect x="45" y="80" width="210" height="195" rx="22" fill="#0B111E" />
          <rect x="55" y="90" width="190" height="175" rx="16" fill="#131C2E" stroke="#334155" strokeWidth="1.5" />
          {/* Bandeau LED bleu électrique */}
          <rect x="70" y="104" width="160" height="4" rx="2" fill={accent} />
          {/* Écran LCD télémétrie */}
          <rect x="75" y="122" width="150" height="62" rx="8" fill="#070B14" stroke="#1E293B" strokeWidth="2" />
          <text x="92" y="158" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="monospace">100%</text>
          <text x="165" y="150" fill="#1877F2" fontSize="11" fontWeight="700" fontFamily="monospace">1000Wh</text>
          <text x="165" y="165" fill="#94A3B8" fontSize="10" fontFamily="monospace">PURE SINE</text>
          {/* Prises AC & USB-C */}
          <rect x="75" y="200" width="42" height="42" rx="8" fill="#1E293B" />
          <circle cx="90" cy="221" r="3" fill="#94A3B8" />
          <circle cx="102" cy="221" r="3" fill="#94A3B8" />
          <rect x="129" y="200" width="42" height="42" rx="8" fill="#1E293B" />
          <circle cx="144" cy="221" r="3" fill="#94A3B8" />
          <circle cx="156" cy="221" r="3" fill="#94A3B8" />
          <rect x="183" y="200" width="42" height="42" rx="8" fill="#1877F2" fillOpacity="0.2" stroke="#1877F2" />
          <rect x="195" y="212" width="18" height="6" rx="3" fill="#1877F2" />
          <rect x="195" y="224" width="18" height="6" rx="3" fill="#1877F2" />
        </svg>
      );

    case 'inverter':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          <rect x="60" y="35" width="180" height="270" rx="18" fill="#0B111E" />
          <rect x="68" y="43" width="164" height="254" rx="14" fill="#141E30" />
          {/* Grilles de ventilation */}
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="85" y={62 + i * 10} width="130" height="4" rx="2" fill="#334155" />
          ))}
          {/* Interface centrale */}
          <circle cx="150" cy="165" r="46" fill="#0B111E" stroke="#1877F2" strokeWidth="3" />
          <circle cx="150" cy="165" r="36" fill="#0F172A" />
          <text x="150" y="162" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="800">5.0 kVA</text>
          <text x="150" y="178" textAnchor="middle" fill="#1877F2" fontSize="10" fontWeight="700">HYBRID MPPT</text>
          {/* Connecteurs bas */}
          <rect x="90" y="245" width="24" height="32" rx="4" fill="#EF4444" />
          <rect x="122" y="245" width="24" height="32" rx="4" fill="#334155" />
          <rect x="154" y="245" width="24" height="32" rx="4" fill="#1877F2" />
          <rect x="186" y="245" width="24" height="32" rx="4" fill="#334155" />
        </svg>
      );

    case 'battery':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          {/* Rack Batterie LiFePO4 */}
          <rect x="40" y="75" width="220" height="190" rx="14" fill="#0B111E" />
          <rect x="48" y="83" width="204" height="174" rx="10" fill="#162033" stroke="#334155" strokeWidth="1.5" />
          {/* Bornes Positif / Négatif */}
          <rect x="75" y="55" width="32" height="20" rx="4" fill="#DC2626" />
          <rect x="193" y="55" width="32" height="20" rx="4" fill="#1E293B" />
          {/* Indicateurs LED niveau de charge */}
          {[0, 1, 2, 3, 4].map((bar) => (
            <rect
              key={bar}
              x={72 + bar * 32}
              y="115"
              width="24"
              height="10"
              rx="3"
              fill={bar < 4 ? "#1877F2" : "#334155"}
            />
          ))}
          <text x="72" y="165" fill="#FFFFFF" fontSize="22" fontWeight="900">LiFePO4</text>
          <text x="72" y="190" fill="#1877F2" fontSize="15" fontWeight="700">48V • 100Ah • 5.12kWh</text>
          <text x="72" y="225" fill="#94A3B8" fontSize="11" fontWeight="600">BMS INTELLIGENT INTÉGRÉ</text>
        </svg>
      );

    case 'smart-meter':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          {/* Module Rail DIN */}
          <rect x="75" y="55" width="150" height="230" rx="14" fill="#0B111E" />
          <rect x="85" y="65" width="130" height="210" rx="10" fill="#182236" />
          {/* Écran OLED */}
          <rect x="98" y="95" width="104" height="75" rx="6" fill="#060A12" stroke="#1877F2" strokeWidth="1.5" />
          <text x="150" y="128" textAnchor="middle" fill="#1877F2" fontSize="18" fontWeight="800" fontFamily="monospace">230.4 V</text>
          <text x="150" y="150" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="monospace">Wi-Fi • 3-PHASE</text>
          {/* Boutons de contrôle */}
          <circle cx="125" cy="205" r="10" fill="#334155" />
          <circle cx="175" cy="205" r="10" fill="#1877F2" />
          {/* Borniers */}
          <rect x="95" y="242" width="110" height="20" rx="4" fill="#0B111E" />
        </svg>
      );

    case 'mppt':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          <rect x="65" y="55" width="170" height="230" rx="16" fill="#0B111E" />
          {/* Ailettes de refroidissement latérales */}
          <rect x="57" y="75" width="8" height="190" rx="3" fill="#1877F2" />
          <rect x="235" y="75" width="8" height="190" rx="3" fill="#1877F2" />
          <rect x="85" y="85" width="130" height="80" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="150" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="800">MPPT 60A</text>
          <text x="150" y="142" textAnchor="middle" fill="#1877F2" fontSize="11" fontWeight="700">99.5% TRACKING</text>
          {/* 6 Bornes inférieures */}
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <circle key={idx} cx={92 + idx * 23} cy="235" r="7" fill={idx % 2 === 0 ? "#EF4444" : "#334155"} />
          ))}
        </svg>
      );

    case 'ev-charger':
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          {/* Borne Murale VE */}
          <rect x="75" y="40" width="150" height="240" rx="28" fill="#0B111E" />
          <rect x="85" y="50" width="130" height="220" rx="22" fill="#131C2E" />
          {/* Anneau LED statut charge */}
          <circle cx="150" cy="130" r="42" fill="none" stroke="#1877F2" strokeWidth="6" />
          <path d="M152 114 L141 131 H150 L147 146 L160 129 H151 L152 114 Z" fill="#FFFFFF" />
          <text x="150" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800">7.4 kW • 32A</text>
          <text x="150" y="225" textAnchor="middle" fill="#1877F2" fontSize="11" fontWeight="700">TYPE 2 • RFID / APP</text>
        </svg>
      );

    case 'foldable-solar':
    default:
      return (
        <svg viewBox="0 0 300 340" className="w-4/5 h-4/5 drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          {/* 3 Panneaux pliables */}
          {[0, 1, 2].map((panel) => (
            <g key={panel} transform={`translate(${42 + panel * 74}, 65)`}>
              <rect width="68" height="210" rx="6" fill="#0B111E" stroke="#334155" strokeWidth="2" />
              <rect x="6" y="10" width="56" height="190" rx="3" fill="#13203B" />
              <line x1="6" y1="73" x2="62" y2="73" stroke="#1877F2" strokeOpacity="0.5" />
              <line x1="6" y1="136" x2="62" y2="136" stroke="#1877F2" strokeOpacity="0.5" />
            </g>
          ))}
          <rect x="115" y="245" width="70" height="22" rx="4" fill="#1877F2" />
          <text x="150" y="260" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">200W NOMADE</text>
        </svg>
      );
  }
};

/**
 * CATALOGUE PRODUITS VOLTUS (EN FRANÇAIS, PRIX EN MAD / DH)
 */
const PRODUCTS = [
  {
    id: 'voltus-panel-450',
    name: 'Panneau Solaire Monocristallin 450W Pro',
    subtitle: 'Cellules N-Type Haute Densité • Anti-Reflet',
    category: 'Solaire & Panneaux',
    price: 2490,
    badge: 'BEST-SELLER',
    illustration: 'solar-panel',
    description:
      'Conçu pour maximiser la captation photovoltaïque même par faible ensoleillement. Sa structure en aluminium anodisé noir mat résiste aux vents violents et aux environnements salins.',
    specs: {
      Tension: '41.5V (Vmp) / 49.8V (Voc)',
      Puissance: '450W Crête (Tolérance +5W)',
      Rendement: '22.8% Monocristallin PERC',
      Garantie: '25 ans performance linéaire'
    }
  },
  {
    id: 'voltus-core-1000',
    name: "Station d'Énergie Portable Voltus Core 1000Wh",
    subtitle: 'Charge Rapide 1h • Onduleur Pur Sinus 1200W',
    category: 'Stockage & Batteries',
    price: 6800,
    badge: 'NOUVEAU',
    illustration: 'power-station',
    description:
      'La puissance autonome partout avec vous. Idéale pour les chantiers mobiles, le camping-car ou le secours domestique instantané (fonction UPS < 10ms).',
    specs: {
      Tension: '230V AC Pur Sinus / 12V DC / USB-C 100W',
      Puissance: '1024Wh Capacité / 1200W Sortie (2400W Crête)',
      Rendement: '94% Conversion Onduleur',
      Garantie: '5 ans constructeur (3500+ cycles)'
    }
  },
  {
    id: 'voltus-inverter-5kva',
    name: 'Onduleur Hybride Solaire 5kVA Pure Sine',
    subtitle: 'Double Tracker MPPT • Injection & Autoconsommation',
    category: 'Solaire & Panneaux',
    price: 5200,
    badge: 'BEST-SELLER',
    illustration: 'inverter',
    description:
      'Le cerveau de votre installation énergétique. Gère intelligemment la priorité entre panneaux solaires, parc batteries et réseau national sans micro-coupure.',
    specs: {
      Tension: '48V DC Batterie / 230V AC Monophasé',
      Puissance: '5000VA / 5000W Nominale',
      Rendement: '98.2% Efficacité Européenne',
      Garantie: '5 ans avec support technique Maroc'
    }
  },
  {
    id: 'voltus-lifepo4-48v',
    name: 'Batterie Lithium LiFePO4 48V 100Ah',
    subtitle: 'Rack 5.12 kWh • BMS Smart CAN/RS485',
    category: 'Stockage & Batteries',
    price: 11500,
    badge: 'PRO',
    illustration: 'battery',
    description:
      'Chimie Lithium Fer Phosphate ultra-sécurisée offrant plus de 6000 cycles à 80% de profondeur de décharge. Extensible jusqu’à 16 unités en parallèle.',
    specs: {
      Tension: '51.2V Nominale (Plage 44.8V - 57.6V)',
      Puissance: '5.12 kWh (100Ah) / Décharge 100A continu',
      Rendement: '99% Efficacité Coulombienne',
      Garantie: '10 ans ou 6000 cycles'
    }
  },
  {
    id: 'voltus-grid-meter',
    name: 'Compteur Intelligent Wi-Fi Triphasé Voltus Grid',
    subtitle: 'Télémétrie Temps Réel • Pinces Ampèremétriques 120A',
    category: 'Domotique & Smart Grid',
    price: 790,
    badge: 'NOUVEAU',
    illustration: 'smart-meter',
    description:
      'Visualisez votre consommation et votre production solaire seconde par seconde depuis votre smartphone. Détection des anomalies de tension et alertes instantanées.',
    specs: {
      Tension: '3x 230V / 400V AC (50/60Hz)',
      Puissance: 'Mesure bidirectionnelle jusqu’à 80 kW',
      Rendement: 'Précision Classe 1.0 (±1%)',
      Garantie: '3 ans échange standard'
    }
  },
  {
    id: 'voltus-mppt-60a',
    name: 'Régulateur de Charge MPPT 60A 12V/24V/48V',
    subtitle: 'Détection Automatique • Dissipateur Aluminium CNC',
    category: 'Accessoires & Câblage',
    price: 1350,
    badge: null,
    illustration: 'mppt',
    description:
      'Optimise en permanence le point de puissance maximale de vos panneaux solaires pour recharger vos batteries jusqu’à 30% plus vite qu’un régulateur PWM classique.',
    specs: {
      Tension: 'Auto 12V / 24V / 36V / 48V (Max PV 150V)',
      Puissance: '780W (12V) jusqu’à 3120W (48V)',
      Rendement: '99.5% Suivi MPPT / 98% Conversion',
      Garantie: '3 ans constructeur'
    }
  },
  {
    id: 'voltus-ev-wallbox',
    name: 'Borne de Recharge VE Murale 7.4kW Type 2',
    subtitle: 'Étanche IP65 • Contrôle App & Cartes RFID',
    category: 'Domotique & Smart Grid',
    price: 4900,
    badge: 'NOUVEAU',
    illustration: 'ev-charger',
    description:
      'Rechargez votre véhicule électrique jusqu’à 3 fois plus rapidement qu’une prise domestique. Programmation heures creuses et délestage dynamique intégrés.',
    specs: {
      Tension: '230V AC Monophasé (32A réglable)',
      Puissance: '7.4 kW (Câble Type 2 5m inclus)',
      Rendement: '99.4% avec protection différentielle Type B',
      Garantie: '3 ans pièces et main-d’œuvre'
    }
  },
  {
    id: 'voltus-nomad-200w',
    name: 'Kit Solaire Nomade Pliable 200W USB-C/DC',
    subtitle: 'Ultra-Léger 6.2 kg • Revêtement ETFE IP67',
    category: 'Accessoires & Câblage',
    price: 2150,
    badge: 'BEST-SELLER',
    illustration: 'foldable-solar',
    description:
      'Déployez une centrale solaire en 15 secondes. Compatible avec toutes les stations Voltus Core et équipé de sorties directes USB-C PD 65W pour ordinateurs et smartphones.',
    specs: {
      Tension: '20V DC (MC4) + USB-C 65W + USB-A QC3.0',
      Puissance: '200W Monocristallin Haute Efficacité',
      Rendement: '23.4% Cellules SunPower',
      Garantie: '2 ans garantie intégrale'
    }
  }
];

const CATEGORIES = [
  'Tout',
  'Solaire & Panneaux',
  'Stockage & Batteries',
  'Domotique & Smart Grid',
  'Accessoires & Câblage'
];

/**
 * FORMATAGE DES PRIX EN DIRHAMS MAROCAINS (MAD / DH)
 */
const formatPrice = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' DH';
};

export default function App() {
  // États principaux de l'application
  const [selectedCategory, setSelectedCategory] = useState('Tout');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // État du panier e-commerce
  const [cart, setCart] = useState([
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[4], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Modal de détails produit
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalQty, setModalQty] = useState(1);

  // Toast notification rapide
  const [toastMessage, setToastMessage] = useState(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filtrage des produits
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Tout' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Calculs du panier
  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cart]
  );

  const freeShippingThreshold = 3000;
  const shippingCost = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 90;
  const cartTotal = cartSubtotal + shippingCost;

  // Afficher un message toast temporaire
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  // Ajouter au panier
  const handleAddToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty
        };
        return updated;
      }
      return [...prev, { product, quantity: qty }];
    });
    setCheckoutSuccess(false);
    triggerToast(`Ajouté au panier : ${product.name}`);
  };

  // Modifier quantité panier
  const updateCartQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Supprimer du panier
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Simulation de validation de commande
  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
    }, 400);
  };

  // Ouverture modal produit
  const openProductModal = (product) => {
    setActiveProduct(product);
    setModalQty(1);
  };

  // Défilement fluide vers le catalogue
  const scrollToCatalog = (category = null) => {
    if (category) setSelectedCategory(category);
    const el = document.getElementById('catalogue-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0B111E] font-sans antialiased selection:bg-[#1877F2] selection:text-white">
      {/* BANDEAU ANNONCE SUPÉRIEUR (STYLE GYMSHARK) */}
      <div className="bg-[#0B111E] text-white text-xs font-bold tracking-wider uppercase py-2.5 px-4 text-center flex items-center justify-center gap-3">
        <Zap className="w-3.5 h-3.5 text-[#1877F2] shrink-0" />
        <span>Livraison Express Gratuite partout au Maroc dès 3 000 DH d&apos;achat</span>
        <span className="hidden sm:inline text-[#1877F2]">•</span>
        <span className="hidden sm:inline text-slate-300">Garantie Certifiée VOLTUS</span>
      </div>

      {/* HEADER PRINCIPAL STICKY */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Menu Mobile + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-[#0B111E] hover:bg-slate-100 rounded-full transition"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory('Tout');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none"
            >
              <VoltusLogo className="h-7 sm:h-8" />
            </a>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => scrollToCatalog(cat)}
                  className={`text-xs font-extrabold uppercase tracking-wider py-2 border-b-2 transition-all ${
                    isActive
                      ? 'border-[#1877F2] text-[#0B111E]'
                      : 'border-transparent text-slate-600 hover:text-[#0B111E]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>

          {/* Actions Droite : Recherche & Panier */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Barre de recherche expandable */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#F5F6F8] rounded-full px-3.5 py-1.5 border border-slate-200 focus-within:border-[#1877F2] transition-all">
                  <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher un produit..."
                    autoFocus
                    className="bg-transparent text-sm text-[#0B111E] placeholder-slate-400 focus:outline-none w-36 sm:w-52"
                  />
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="text-slate-400 hover:text-[#0B111E] ml-1"
                    aria-label="Fermer la recherche"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 rounded-full hover:bg-[#F5F6F8] text-[#0B111E] transition flex items-center gap-2"
                  aria-label="Rechercher"
                >
                  <Search className="w-5 h-5" />
                  <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-slate-500">
                    Rechercher
                  </span>
                </button>
              )}
            </div>

            {/* Bouton Panier */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#F5F6F8] hover:bg-[#0B111E] text-[#0B111E] hover:text-white transition-colors group"
              aria-label="Voir le panier"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1877F2] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO BANNER PLEINE LARGEUR (ESTHÉTIQUE GYMSHARK ATHLÉTIQUE / TECH) */}
      <section className="relative bg-[#0B111E] text-white overflow-hidden">
        {/* Motif grille énergétique géométrique en arrière-plan */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(#1877F2 1px, transparent 1px), radial-gradient(#1877F2 1px, #0B111E 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />
        {/* Halo lumineux bleu électrique */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1877F2] rounded-full blur-[140px] opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1877F2] rounded-full blur-[150px] opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-white">
                Collection Performance Énergétique 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
              L&apos;ÉNERGIE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1877F2]">
                NOUVELLE GÉNÉRATION
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              Équipez votre habitat et vos projets avec une ingénierie électrique de pointe.
              Panneaux monocristallins haute densité, stockage LiFePO4 et pilotage Smart Grid.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToCatalog('Tout')}
                className="bg-white text-[#0B111E] hover:bg-[#1877F2] hover:text-white font-black uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2.5 shadow-lg shadow-black/25 cursor-pointer"
              >
                Découvrir le Catalogue
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToCatalog('Stockage & Batteries')}
                className="bg-transparent border-2 border-white/25 hover:border-white text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer"
              >
                Solutions Autonomie
              </button>
            </div>

            {/* Statistiques clés */}
            <div className="pt-6 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">99.5%</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                  Rendement MPPT
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#1877F2]">25 ANS</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                  Garantie Solaire
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">24/48H</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                  Expédition Maroc
                </p>
              </div>
            </div>
          </div>

          {/* Visuel produit phare dans le Hero */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => openProductModal(PRODUCTS[1])}
              className="relative w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 cursor-pointer group hover:border-[#1877F2] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#1877F2] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Édition Phare
                </span>
                <span className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1">
                  Voir la fiche <ChevronRight className="w-4 h-4" />
                </span>
              </div>

              <div className="h-64 flex items-center justify-center">
                <ProductIllustration type="power-station" />
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase font-bold text-[#1877F2] tracking-wider">
                    Stockage Portable
                  </p>
                  <h2 className="text-lg font-black text-white leading-tight mt-0.5">
                    Voltus Core 1000Wh
                  </h2>
                </div>
                <p className="text-xl font-black text-white">6 800 DH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARRE DE RÉASSURANCE TECHNIQUE */}
      <section className="border-b border-slate-100 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#0B111E] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#1877F2]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#0B111E]">
                Normes CE & IEC Certifiées
              </p>
              <p className="text-xs text-slate-500">Matériel testé en laboratoire haute tension</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#0B111E] text-white flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-[#1877F2]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#0B111E]">
                Livraison Sécurisée 48H
              </p>
              <p className="text-xs text-slate-500">Casablanca, Rabat, Marrakech, Tanger & partout</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#0B111E] text-white flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#1877F2]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#0B111E]">
                Dimensionnement Gratuit
              </p>
              <p className="text-xs text-slate-500">Support ingénieurs énergie dédié</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CATALOGUE PRINCIPAL (STYLE GYMSHARK CLEAN GRID) */}
      <main id="catalogue-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* En-tête de section + Compteur */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1877F2] mb-1.5">
              Équipements Haute Performance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B111E]">
              {selectedCategory === 'Tout' ? 'Tous nos produits' : selectedCategory}
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-[#0B111E]" />
            <span>
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} disponible
              {filteredProducts.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Pilules de filtrage par catégorie */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-[#0B111E] text-white shadow-md shadow-[#0B111E]/15'
                    : 'bg-[#F5F6F8] text-[#0B111E] hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grille Produits 4:5 Aspect Ratio */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#F5F6F8] rounded-3xl p-12 text-center">
            <p className="text-lg font-black uppercase text-[#0B111E] mb-2">
              Aucun équipement trouvé
            </p>
            <p className="text-sm text-slate-500 mb-6">
              Essayez un autre mot-clé ou réinitialisez les filtres de catégorie.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Tout');
                setSearchQuery('');
              }}
              className="bg-[#0B111E] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#1877F2] transition"
            >
              Afficher tout le catalogue
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group flex flex-col">
                {/* Carte Visuelle Ratio 4:5 Gris Clair #F5F6F8 */}
                <div
                  onClick={() => openProductModal(product)}
                  className="relative aspect-[4/5] w-full bg-[#F5F6F8] rounded-2xl overflow-hidden flex items-center justify-center p-6 cursor-pointer transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/70"
                >
                  {/* Badge NOUVEAU / BEST-SELLER */}
                  {product.badge && (
                    <span
                      className={`absolute top-3.5 left-3.5 z-10 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                        product.badge === 'NOUVEAU'
                          ? 'bg-[#1877F2] text-white'
                          : 'bg-[#0B111E] text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Illustration Produit */}
                  <ProductIllustration type={product.illustration} />

                  {/* Bouton Ajout Rapide (Apparaît au survol desktop / toujours accessible mobile) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product, 1);
                    }}
                    className="absolute bottom-3.5 inset-x-3.5 bg-[#0B111E] hover:bg-[#1877F2] text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-200 opacity-95 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    Ajout Rapide
                  </button>
                </div>

                {/* Informations Produit sous la carte */}
                <div className="pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1877F2] mb-1">
                      {product.category}
                    </p>
                    <h3
                      onClick={() => openProductModal(product)}
                      className="text-base font-extrabold text-[#0B111E] leading-snug group-hover:text-[#1877F2] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{product.subtitle}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-black text-[#0B111E]">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => openProductModal(product)}
                      className="text-xs font-bold text-slate-500 hover:text-[#0B111E] underline underline-offset-4 cursor-pointer"
                    >
                      Fiche technique
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* SECTION BANNIÈRE ÉCOSYSTÈME SMART GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#0B111E] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden grid lg:grid-cols-2 gap-10 items-center">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#1877F2] rounded-full blur-[160px] opacity-25 pointer-events-none" />

          <div className="space-y-5 relative z-10">
            <span className="inline-block bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/40 text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full">
              Pack Autonomie Complète
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
              Passez au Zéro Coupure avec le Kit Hybride VOLTUS
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Associez notre Onduleur Hybride 5kVA à la Batterie LiFePO4 48V 100Ah pour alimenter
              votre maison ou votre entreprise 24h/24 avec basculement automatique en moins de 10 ms.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  handleAddToCart(PRODUCTS[2], 1);
                  handleAddToCart(PRODUCTS[3], 1);
                  setIsCartOpen(true);
                }}
                className="bg-[#1877F2] hover:bg-white text-white hover:text-[#0B111E] font-black uppercase tracking-wider text-xs sm:text-sm px-7 py-4 rounded-full transition-all inline-flex items-center gap-2.5 cursor-pointer"
              >
                Ajouter le Pack Hybride au Panier
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <Sun className="w-7 h-7 text-[#1877F2] mb-3" />
              <h3 className="font-black uppercase text-sm mb-1">Production Solaire</h3>
              <p className="text-xs text-slate-400">
                Jusqu&apos;à 70% d&apos;économie immédiate sur votre facture d&apos;électricité.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <BatteryCharging className="w-7 h-7 text-[#1877F2] mb-3" />
              <h3 className="font-black uppercase text-sm mb-1">Stockage Lithium</h3>
              <p className="text-xs text-slate-400">
                5.12 kWh disponibles la nuit avec sécurité thermique LiFePO4.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <Cpu className="w-7 h-7 text-[#1877F2] mb-3" />
              <h3 className="font-black uppercase text-sm mb-1">Pilotage Wi-Fi</h3>
              <p className="text-xs text-slate-400">
                Suivi de production et consommation en temps réel sur mobile.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <Cable className="w-7 h-7 text-[#1877F2] mb-3" />
              <h3 className="font-black uppercase text-sm mb-1">Installation Plug &amp; Play</h3>
              <p className="text-xs text-slate-400">
                Connecteurs MC4 et borniers sécurisés prêts à raccorder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PROFESSIONNEL & PRÊT POUR VERCEL / PWA */}
      <footer className="bg-[#0B111E] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
            {/* Identité Marque */}
            <div className="lg:col-span-4 space-y-5">
              <VoltusLogo lightMode className="h-8" />
              <p className="text-slate-400 text-sm leading-relaxed">
                VOLTUS conçoit et distribue des solutions d&apos;énergie électrique, photovoltaïque et
                de mobilité électrique nouvelle génération pour particuliers et professionnels.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Application Web Optimisée • Déployée sur Vercel</span>
              </div>
            </div>

            {/* Liens Catégories */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Catégories
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {CATEGORIES.slice(1).map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => scrollToCatalog(cat)}
                      className="hover:text-[#1877F2] transition text-left"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Services */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Assistance
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => scrollToCatalog('Tout')}
                    className="hover:text-white transition"
                  >
                    Suivi de commande
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToCatalog('Tout')}
                    className="hover:text-white transition"
                  >
                    Garantie 25 ans
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToCatalog('Tout')}
                    className="hover:text-white transition"
                  >
                    Installateurs Agréés
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToCatalog('Tout')}
                    className="hover:text-white transition"
                  >
                    Devis Pro &amp; Entreprises
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Rejoignez le réseau VOLTUS
              </h4>
              <p className="text-sm text-slate-400">
                Recevez nos guides techniques solaires et bénéficiez de <strong className="text-white">-10%</strong> sur votre première commande.
              </p>

              {newsletterSubscribed ? (
                <div className="bg-[#1877F2]/20 border border-[#1877F2] text-white rounded-xl p-4 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#1877F2] shrink-0" />
                  <span>Inscription confirmée ! Code promo : <strong>VOLTUS10</strong></span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) {
                      setNewsletterSubscribed(true);
                      setNewsletterEmail('');
                    }
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Votre adresse e-mail..."
                    className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#1877F2]"
                  />
                  <button
                    type="submit"
                    className="bg-[#1877F2] hover:bg-white text-white hover:text-[#0B111E] font-black uppercase text-xs tracking-wider px-6 py-3 rounded-full transition cursor-pointer shrink-0"
                  >
                    S&apos;inscrire
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} VOLTUS Énergie. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <span>Paiement Sécurisé CMI / Carte / Virement</span>
              <span>MAD (DH)</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL FICHE TECHNIQUE PRODUIT INTERACTIVE
      ===================================================================== */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl grid md:grid-cols-2 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#0B111E] text-[#0B111E] hover:text-white flex items-center justify-center shadow-md transition cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Visuel gauche */}
            <div className="bg-[#F5F6F8] p-8 sm:p-12 flex flex-col items-center justify-center relative min-h-[320px]">
              {activeProduct.badge && (
                <span className="absolute top-5 left-5 bg-[#1877F2] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {activeProduct.badge}
                </span>
              )}
              <ProductIllustration type={activeProduct.illustration} />
            </div>

            {/* Détails et Spécifications Techniques droite */}
            <div className="p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#1877F2]">
                  {activeProduct.category}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B111E] mt-1 leading-tight">
                  {activeProduct.name}
                </h2>
                <p className="text-2xl font-black text-[#0B111E] mt-3">
                  {formatPrice(activeProduct.price)}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mt-4">
                  {activeProduct.description}
                </p>

                {/* Tableau Spécifications Techniques */}
                <div className="mt-6">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0B111E] mb-3">
                    Spécifications Techniques
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {Object.entries(activeProduct.specs).map(([key, val]) => (
                      <div
                        key={key}
                        className="bg-[#F5F6F8] rounded-xl p-3 border border-slate-100"
                      >
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          {key}
                        </p>
                        <p className="text-xs font-bold text-[#0B111E] mt-0.5">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sélecteur Quantité + Bouton Ajouter au panier */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="flex items-center bg-[#F5F6F8] rounded-full p-1">
                  <button
                    onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white text-[#0B111E] transition cursor-pointer"
                    aria-label="Diminuer quantité"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-black">{modalQty}</span>
                  <button
                    onClick={() => setModalQty((q) => q + 1)}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white text-[#0B111E] transition cursor-pointer"
                    aria-label="Augmenter quantité"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(activeProduct, modalQty);
                    setActiveProduct(null);
                    setIsCartOpen(true);
                  }}
                  className="flex-1 bg-[#0B111E] hover:bg-[#1877F2] text-white font-black uppercase tracking-wider text-xs sm:text-sm py-4 px-6 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Ajouter • {formatPrice(activeProduct.price * modalQty)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TIROIR PANIER LATÉRAL (SLIDE-OVER SHOPPING CART DRAWER)
      ===================================================================== */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du panier */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#0B111E]" />
                  <h2 className="text-lg font-black uppercase tracking-tight text-[#0B111E]">
                    Votre Panier ({cartCount})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F5F6F8] text-[#0B111E] transition cursor-pointer"
                  aria-label="Fermer le panier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Barre de progression livraison gratuite */}
              <div className="mt-4 bg-[#F5F6F8] p-3 rounded-xl">
                <p className="text-xs font-bold text-[#0B111E] mb-2">
                  {cartSubtotal >= freeShippingThreshold ? (
                    <span className="text-[#1877F2] flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Félicitations ! Vous bénéficiez de la livraison gratuite.
                    </span>
                  ) : (
                    <>
                      Plus que{' '}
                      <span className="text-[#1877F2] font-black">
                        {formatPrice(freeShippingThreshold - cartSubtotal)}
                      </span>{' '}
                      pour la livraison express gratuite.
                    </>
                  )}
                </p>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1877F2] transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Liste des articles */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {checkoutSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#0B111E]">
                    Commande Confirmée !
                  </h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Merci pour votre confiance en <strong>VOLTUS</strong>. Notre équipe logistique
                    prépare votre matériel énergétique.
                  </p>
                  <button
                    onClick={() => {
                      setCheckoutSuccess(false);
                      setIsCartOpen(false);
                    }}
                    className="mt-2 bg-[#0B111E] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#1877F2] transition cursor-pointer"
                  >
                    Continuer mes achats
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <ShoppingBag className="w-12 h-12 text-slate-300 mb-3" />
                  <p className="text-base font-black uppercase text-[#0B111E]">
                    Votre panier est vide
                  </p>
                  <p className="text-xs text-slate-500 mt-1 mb-6 max-w-xs">
                    Explorez nos panneaux solaires, batteries lithium et bornes de recharge.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#0B111E] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#1877F2] transition cursor-pointer"
                  >
                    Découvrir les produits
                  </button>
                </div>
              ) : (
                cart.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-4 bg-[#F5F6F8] p-3.5 rounded-2xl items-center"
                  >
                    <div className="w-20 h-24 bg-white rounded-xl flex items-center justify-center p-2 shrink-0">
                      <ProductIllustration type={product.illustration} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase text-[#1877F2]">
                        {product.category}
                      </p>
                      <h4 className="text-sm font-extrabold text-[#0B111E] truncate">
                        {product.name}
                      </h4>
                      <p className="text-sm font-black text-[#0B111E] mt-1">
                        {formatPrice(product.price * quantity)}
                      </p>

                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center bg-white rounded-full border border-slate-200 px-1 py-0.5">
                          <button
                            onClick={() => updateCartQuantity(product.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-[#0B111E] hover:text-[#1877F2] cursor-pointer"
                            aria-label="Moins"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-black">{quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(product.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#0B111E] hover:text-[#1877F2] cursor-pointer"
                            aria-label="Plus"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-slate-400 hover:text-red-600 p-1 transition cursor-pointer"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pied du panier : Récapitulatif et Commande */}
            {cart.length > 0 && !checkoutSuccess && (
              <div className="p-6 border-t border-slate-100 bg-[#F5F6F8] space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Sous-total</span>
                    <span className="font-bold text-[#0B111E]">{formatPrice(cartSubtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Livraison Express</span>
                    <span className="font-bold text-[#0B111E]">
                      {shippingCost === 0 ? (
                        <span className="text-[#1877F2]">GRATUITE</span>
                      ) : (
                        formatPrice(shippingCost)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-black text-[#0B111E] pt-2 border-t border-slate-200">
                    <span>Total TTC</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#0B111E] hover:bg-[#1877F2] text-white font-black uppercase tracking-wider text-xs sm:text-sm py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Commander Maintenant
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MENU NAVIGATION MOBILE */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-72 h-full p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <VoltusLogo className="h-7" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      scrollToCatalog(cat);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition ${
                      selectedCategory === cat
                        ? 'bg-[#0B111E] text-white'
                        : 'text-[#0B111E] hover:bg-[#F5F6F8]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-[#F5F6F8] p-4 rounded-2xl">
              <p className="text-xs font-black uppercase text-[#0B111E]">Support VOLTUS Maroc</p>
              <p className="text-xs text-slate-500 mt-1">
                Besoin d&apos;aide pour dimensionner votre installation solaire ?
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TOAST DE CONFIRMATION AJOUT PANIER */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#0B111E] text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/10 flex items-center gap-3 text-xs font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-[#1877F2] uppercase font-black ml-1 hover:underline"
          >
            Voir
          </button>
        </div>
      )}
    </div>
  );
}