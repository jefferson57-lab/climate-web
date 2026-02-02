import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Wind, Droplets, Thermometer, TrendingUp, Globe, Users, BookOpen, ChevronRight, Leaf, Sprout, Trees, Moon, Sun } from 'lucide-react';

export default function ClimateInstituteWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const impactStats = [
    { value: "2.5M+", label: "Trees Planted", icon: BookOpen },
    { value: "18", label: "African Countries", icon: Globe },
    { value: "50K+", label: "Community Members", icon: Users },
    { value: "15yr", label: "Restoration Impact", icon: TrendingUp }
  ];

  const researchAreas = [
    {
      title: "Reforestation Science",
      icon: Wind,
      description: "Evidence-based approaches to restore native forests and combat desertification across African landscapes",
      color: "from-emerald-400 to-green-600"
    },
    {
      title: "Water Conservation",
      icon: Droplets,
      description: "Sustainable water management systems that support both communities and reforestation efforts",
      color: "from-cyan-400 to-teal-600"
    },
    {
      title: "Climate Adaptation",
      icon: Thermometer,
      description: "Building resilient ecosystems and communities prepared for climate variability and change",
      color: "from-orange-400 to-red-600"
    },
    {
      title: "Community Impact",
      icon: TrendingUp,
      description: "Measuring environmental recovery and socioeconomic benefits for local communities",
      color: "from-lime-400 to-green-600"
    }
  ];

  const latestInsights = [
    {
      category: "Impact Story",
      title: "Kenya's Great Green Wall: 500,000 Trees Transform Arid Landscape",
      date: "January 15, 2026",
      readTime: "8 min"
    },
    {
      category: "Community Update",
      title: "Women-Led Reforestation Initiative Doubles Tree Survival Rates",
      date: "January 8, 2026",
      readTime: "12 min"
    },
    {
      category: "Scientific Progress",
      title: "Native Species Selection: 5-Year Growth Study Results",
      date: "December 28, 2025",
      readTime: "6 min"
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: isDarkMode ? `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)
            ` : `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className={`absolute inset-0 ${isDarkMode ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" : ''}`} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/80 border-b border-slate-800/50' : 'bg-white/80 border-b border-slate-200/50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">Institute of Climate Restoration for Africa</div>
                <div className="text-xs text-slate-400 tracking-wide">RESTORING • SUSTAINING • THRIVING</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setActivePage('home')} className={`${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors text-sm font-medium tracking-wide ${activePage === 'home' ? 'text-emerald-400' : ''}`}>Home</button>
              <button onClick={() => setActivePage('restoration')} className={`${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors text-sm font-medium tracking-wide ${activePage === 'restoration' ? 'text-emerald-400' : ''}`}>Our Work</button>
              <button onClick={() => setActivePage('impact')} className={`${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors text-sm font-medium tracking-wide ${activePage === 'impact' ? 'text-emerald-400' : ''}`}>Impact</button>
              <button onClick={() => setActivePage('stories')} className={`${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors text-sm font-medium tracking-wide ${activePage === 'stories' ? 'text-emerald-400' : ''}`}>Stories</button>
              <button onClick={() => setActivePage('team')} className={`${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors text-sm font-medium tracking-wide ${activePage === 'team' ? 'text-emerald-400' : ''}`}>Team</button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                Plant Trees
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors ${isDarkMode ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'} backdrop-blur-xl`}>
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => { setActivePage('home'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} ${activePage === 'home' ? 'text-emerald-400' : ''}`}>Home</button>
              <button onClick={() => { setActivePage('restoration'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} ${activePage === 'restoration' ? 'text-emerald-400' : ''}`}>Our Work</button>
              <button onClick={() => { setActivePage('impact'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} ${activePage === 'impact' ? 'text-emerald-400' : ''}`}>Impact</button>
              <button onClick={() => { setActivePage('stories'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} ${activePage === 'stories' ? 'text-emerald-400' : ''}`}>Stories</button>
              <button onClick={() => { setActivePage('team'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} ${activePage === 'team' ? 'text-emerald-400' : ''}`}>Team</button>
              <button className="w-full px-5 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold text-white">
                Plant Trees
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Pages Container */}
      <div className="relative">
      
      {/* HOME PAGE */}
      {activePage === 'home' && (
      <>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm">
                  Restoring Africa's Climate Is Our Main Mission
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Restoring
                <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                  Africa's Climate
                </span>
                <span className="block">One Tree at a Time</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Through grassroots action and scientific innovation, we're reversing climate degradation 
                across Africa—planting forests, restoring ecosystems, and building resilient communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center">
                  Our Impact
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-slate-700 rounded-xl text-lg font-semibold hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300">
                  Plant With Us
                </button>
              </div>
            </div>

            {/* Hero image with overlay */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/image_3.jpg')" }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/50 to-emerald-950/60" />
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium tracking-wide backdrop-blur-sm">
                    <Leaf className="w-4 h-4" />
                    Living Ecosystems
                  </div>
                  <h3 className="text-3xl font-bold text-white">From Seed to Forest</h3>
                  <p className="text-emerald-100 max-w-xl">
                    Every tree we plant contributes to biodiversity, soil health, and carbon sequestration—creating lasting environmental benefits for communities across Africa.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="px-4 py-2 rounded-lg bg-slate-950/60 backdrop-blur-sm border border-emerald-500/30">
                      <div className="text-emerald-400 text-sm font-medium">Carbon Stored</div>
                      <div className="text-2xl font-bold text-white">850K tons</div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-950/60 backdrop-blur-sm border border-emerald-500/30">
                      <div className="text-emerald-400 text-sm font-medium">Biodiversity</div>
                      <div className="text-2xl font-bold text-white">300+ species</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Climate Action Gallery */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
              <Leaf className="w-4 h-4" />
              Climate Action in Progress
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Restoration in Action</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Witness the transformation as communities across Africa come together to plant, nurture, and protect our forests for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Tree Planting Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <img 
                src="/images/image_2.jpg" 
                alt="Community member planting seedling"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Community Tree Planting</h3>
                <p className="text-emerald-200 text-sm mb-3">Kenya Highlands Initiative</p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  15,000 trees planted in 2025
                </div>
              </div>
            </div>

            {/* Seedling Watering Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <img 
                src="/images/image_1.jpg" 
                alt="Fresh seedlings with healthy root system"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Nurturing New Growth</h3>
                <p className="text-teal-200 text-sm mb-3">Tanzania Reforestation Project</p>
                <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  95% seedling survival rate
                </div>
              </div>
            </div>

            {/* Forest Growth Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <img 
                src="/images/image_3.jpg" 
                alt="Thriving forest ecosystem"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Thriving Ecosystems</h3>
                <p className="text-green-200 text-sm mb-3">Uganda Forest Restoration</p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  5-year growth documented
                </div>
              </div>
            </div>

            {/* Youth Education Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-emerald-700/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Women Climate Leaders</h3>
                  <p className="text-emerald-200 text-sm">Self Help Groups Program</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  5,000+ women trained
                </div>
              </div>
            </div>

            {/* Community Gathering Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-lime-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-16 h-16 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Community Mobilization</h3>
                  <p className="text-lime-200 text-sm">Navakholo Villages Initiative</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-lime-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  200+ villages engaged
                </div>
              </div>
            </div>

            {/* Restored Landscape Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-teal-700/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <TrendingUp className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Forest Restoration</h3>
                  <p className="text-teal-200 text-sm">Kakamega Forest Recovery</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  50,000 hectares restored
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 inline-flex items-center gap-2">
              <Trees className="w-5 h-5" />
              View Full Impact Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Climate Challenge & Action Section */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Challenge We Face</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Climate change threatens Africa's ecosystems, but together we're reversing the damage through collective action and restoration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Climate Crisis Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_5.jpg" 
                alt="Cracked earth showing climate impact"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-medium mb-3">
                  The Crisis
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Degraded Landscapes</h3>
                <p className="text-slate-300">Desertification and drought threaten millions of hectares across the continent</p>
              </div>
            </div>

            {/* Climate Action Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_6.jpg" 
                alt="Climate action protest"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-3">
                  Our Response
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Collective Action</h3>
                <p className="text-slate-300">Communities mobilizing for a sustainable future through restoration and advocacy</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2.5M+</div>
              <div className="text-slate-300">Trees planted to combat desertification</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">850K</div>
              <div className="text-slate-300">Tons of CO₂ sequestered annually</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-slate-300">Lives improved through restoration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/image_7.jpg" 
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Restoration Approach</h2>
            <p className="text-xl text-slate-400 max-w-3xl">
              We combine traditional ecological knowledge with modern science to create lasting environmental change across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ChevronRight className="ml-1 w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section id="insights" className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stories of Change</h2>
            <p className="text-xl text-slate-400 max-w-3xl">
              Read about the communities, innovations, and breakthroughs driving Africa's climate restoration movement.
            </p>
          </div>

          <div className="space-y-6">
            {latestInsights.map((insight, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
                        {insight.category}
                      </span>
                      <span className="text-slate-500 text-sm">{insight.date}</span>
                      <span className="text-slate-500 text-sm">• {insight.readTime} read</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                  
                  <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 border-2 border-slate-700 rounded-xl text-lg font-semibold hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300">
              Read More Stories
            </button>
          </div>
        </div>
      </section>
      </>
      )}

      {/* RESTORATION PAGE */}
      {activePage === 'restoration' && (
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Restoration Work</h1>
            <p className="text-xl text-slate-400 max-w-3xl">
              We implement comprehensive climate restoration programs across Africa, combining traditional ecological knowledge with modern science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ChevronRight className="ml-1 w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video mb-16">
            <img 
              src="/images/image_7.jpg" 
              alt="Restoration project"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Active Restoration Projects</h2>
              <p className="text-emerald-100 max-w-2xl">Across 18 African countries, we're implementing restoration projects that restore ecosystems and transform communities.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2.5M+</div>
              <div className="text-slate-300 mb-2">Trees Planted</div>
              <p className="text-slate-400 text-sm">Native species restoration across degraded landscapes</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-4xl font-bold text-emerald-400 mb-2">850K</div>
              <div className="text-slate-300 mb-2">Tons CO₂ Sequestered</div>
              <p className="text-slate-400 text-sm">Annual carbon capture through forest restoration</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-4xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-slate-300 mb-2">Lives Improved</div>
              <p className="text-slate-400 text-sm">Communities directly benefiting from restoration</p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* IMPACT PAGE */}
      {activePage === 'impact' && (
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Measurable environmental and community benefits from our restoration initiatives across Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_5.jpg" 
                alt="Environmental impact"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Environmental Recovery</h3>
                <p className="text-slate-300">Ecosystems are healing with increased biodiversity and soil health restoration</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_6.jpg" 
                alt="Community benefits"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Community Benefits</h3>
                <p className="text-slate-300">Income generation, education, and improved livelihoods for local communities</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8">Key Impact Metrics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Carbon Sequestered</span>
                    <span className="text-emerald-400 font-bold">850K tons/year</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Forest Coverage</span>
                    <span className="text-emerald-400 font-bold">250K hectares</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Species Restored</span>
                    <span className="text-emerald-400 font-bold">300+ species</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Community Members</span>
                    <span className="text-emerald-400 font-bold">50K+ engaged</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* STORIES PAGE */}
      {activePage === 'stories' && (
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Stories of Change</h1>
            <p className="text-xl text-slate-400 max-w-3xl">
              Real stories from communities and individuals driving Africa's climate restoration movement.
            </p>
          </div>

          <div className="space-y-6">
            {latestInsights.map((insight, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
                        {insight.category}
                      </span>
                      <span className="text-slate-500 text-sm">{insight.date}</span>
                      <span className="text-slate-500 text-sm">• {insight.readTime} read</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                  
                  <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                    Read Story
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden aspect-video group">
                <img 
                  src="/images/image_2.jpg" 
                  alt="Featured story"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Community Success Stories</h3>
                  <p className="text-emerald-200">How local leaders are transforming their communities through restoration</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video group">
                <img 
                  src="/images/image_3.jpg" 
                  alt="Featured story"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Scientific Breakthroughs</h3>
                  <p className="text-emerald-200">Research findings accelerating restoration efforts across the continent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* TEAM PAGE */}
      {activePage === 'team' && (
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Dedicated professionals committed to restoring Africa's climate and ecosystems.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div 
                  key={member}
                  className="group relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <img 
                    src={`/images/image_${member}.jpg`}
                    alt={`Team member ${member}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Leadership Member</h3>
                    <p className="text-emerald-400 text-sm">Director of Restoration</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Regional Teams</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">East Africa</h3>
                <p className="text-slate-300 mb-4">Leading restoration efforts in Kenya, Uganda, and Tanzania with community-driven initiatives.</p>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p>• 15,000 trees planted</p>
                  <p>• 200+ villages engaged</p>
                  <p>• 5,000+ community members trained</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Central Africa</h3>
                <p className="text-slate-300 mb-4">Implementing large-scale forest restoration and ecosystem rehabilitation programs.</p>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p>• 1,200,000 trees planted</p>
                  <p>• 150+ villages engaged</p>
                  <p>• 3,000+ community members trained</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Join Our Team</h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">We're looking for passionate individuals to join our mission of restoring Africa's climate and ecosystems.</p>
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
      )}

      </div>
      {/* End Pages Container */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Plant the Seeds of Change
              </h2>
              <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                Join thousands of individuals and organizations working together to restore Africa's climate—one tree, one community, one ecosystem at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Start Planting Today
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold">ICRA</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Institute of Climate Restoration for Africa — Planting hope, growing futures.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Work</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Tree Planting</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Impact Stories</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Active Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Media</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Social Media</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2026 Institute of Climate Restoration for Africa. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}