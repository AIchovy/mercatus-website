"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 粒子效果组件
const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, index) => {
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.3 + 0.1;
        
        return (
          <div 
            key={index}
            className="absolute rounded-full bg-blue-500/30"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: '-20px',
              opacity: opacity,
              animation: `floatParticle ${duration}s ${delay}s infinite linear`
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [scrollY, setScrollY] = useState(0);
  
  // 处理滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:dylan.liu@tensorbounce.com?subject=Join AI Marketing Team Waitlist&body=I would like to join the waitlist. My email is: ${email}`;
    setEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 添加全局动画样式 */}
      <style jsx global>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(calc(100vh + 20px)) rotate(360deg);
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-10 py-4 px-6 md:px-12 shadow-sm border-b border-gray-100">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-bold text-2xl flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Mercatus</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-600 transition-colors relative group py-1">
              Features
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#architecture" className="hover:text-blue-600 transition-colors relative group py-1">
              Architecture
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#experts" className="hover:text-blue-600 transition-colors relative group py-1">
              Expert Team
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#scenarios" className="hover:text-blue-600 transition-colors relative group py-1">
              Use Cases
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
          <a 
            href="#waitlist" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2 text-sm"
          >
            <span>Join Waitlist</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
          {/* 背景装饰元素 */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
              style={{ 
                transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`,
                transition: 'transform 0.3s ease-out' 
              }}
            ></div>
            <div 
              className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
              style={{ 
                transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.03}px)`,
                transition: 'transform 0.3s ease-out' 
              }}
            ></div>
            <div 
              className="absolute top-40 right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
              style={{ 
                transform: `translate(${scrollY * -0.02}px, ${scrollY * -0.02}px)`,
                transition: 'transform 0.3s ease-out' 
              }}
            ></div>
            <div 
              className="hidden md:block absolute -left-10 top-1/2 w-40 h-40 border border-blue-200/30 rounded-full"
              style={{ 
                transform: `scale(${1 + scrollY * 0.0005})`,
                transition: 'transform 0.3s ease-out' 
              }}
            ></div>
            <div 
              className="hidden md:block absolute right-1/4 bottom-10 w-60 h-60 border border-purple-200/30 rounded-full"
              style={{ 
                transform: `scale(${1 - scrollY * 0.0003})`,
                transition: 'transform 0.3s ease-out' 
              }}
            ></div>
            <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* 添加粒子效果 */}
          <ParticleEffect />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 relative z-10">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-blue-600 font-medium">AI-Powered Marketing Teams</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                AI Marketing Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Your intelligent marketing assistant team, providing comprehensive marketing support without hiring real employees
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#waitlist" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2 group"
                >
                  <span>Join Waitlist Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="#architecture" 
                  className="text-gray-700 hover:text-blue-600 px-6 py-3 rounded-full text-lg transition-colors flex items-center gap-2 group"
                >
                  <span>View Architecture</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="mt-16 flex justify-center">
                <div 
                  className="relative w-full max-w-4xl h-[300px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden"
                  style={{ 
                    transform: `translateY(${Math.min(0, -50 + scrollY * 0.15)}px)`,
                    opacity: Math.min(1, 0.8 + scrollY * 0.001),
                    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out' 
                  }}
                >
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm p-8 flex items-center justify-center">
                    <Image 
                      src="/architecture-diagram.svg" 
                      alt="Mercatus AI Architecture Preview" 
                      width={500} 
                      height={250}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                  
                  {/* 科技感装饰 */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70"></div>
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70"></div>
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-70"></div>
                  
                  {/* 角落装饰 */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500 opacity-80"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-indigo-500 opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500 opacity-80"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-indigo-500 opacity-80"></div>
                  
                  {/* 吸引用户关注的文字 */}
                  <div className="absolute top-4 left-4 bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 text-blue-700 text-sm font-medium">
                    AI Agent Architecture
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <a 
                      href="#architecture" 
                      className="bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 text-blue-700 text-sm font-medium flex items-center gap-2 hover:bg-blue-100/80 transition-colors"
                    >
                      <span>Explore Details</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 bg-gray-50 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Product Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Task Allocation</h3>
                <p className="text-gray-600">Automatically assigns the most suitable marketing expert roles based on your needs, improving efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Flexible Working Modes</h3>
                <p className="text-gray-600">Supports real-time interaction and periodic task execution to meet different marketing needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Continuous Optimization</h3>
                <p className="text-gray-600">Continuously learns and optimizes based on user feedback to improve service quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">AI Agent Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-10">
              Our cutting-edge AI agent infrastructure runs on Kubernetes, providing scalable, reliable, and secure AI services.
            </p>
            <div className="relative flex justify-center">
              <Image 
                src="/architecture-diagram.svg" 
                alt="Mercatus AI Agent Architecture" 
                width={800} 
                height={500}
                className="shadow-lg rounded-lg"
                priority
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Kubernetes Orchestration</h3>
                <p className="text-gray-600">
                  Our entire infrastructure runs on Kubernetes, enabling auto-scaling, high availability, and seamless updates without service interruption.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Mercatus Main Service</h3>
                <p className="text-gray-600">
                  The central service orchestrates all operations, distributing tasks and managing the lifecycle of AI agents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Agent Infrastructure</h3>
                <p className="text-gray-600">
                  Each mercatus-agent runs in a dedicated Ubuntu environment with a built-in browser, enabling agents to interact with web content.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">LLM-powered Workflow</h3>
                <p className="text-gray-600">
                  Advanced LLM agents execute customized workflows within each agent container, providing intelligent automation for marketing tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section id="experts" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expert Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Marketing Strategist</h3>
                <p className="text-gray-600">Responsible for marketing strategy planning and proposal development</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Creator</h3>
                <p className="text-gray-600">Responsible for creating and generating various marketing content</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Analyst</h3>
                <p className="text-gray-600">Responsible for market analysis and data report generation</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Specialist</h3>
                <p className="text-gray-600">Responsible for market modeling, content validation, and market evaluation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="scenarios" className="py-16 bg-gray-50 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Marketing Strategy Planning</h3>
                <p className="text-gray-600 mb-4">Market entry strategy development, product positioning and differentiation strategies, marketing channel selection recommendations, etc.</p>
                <div className="text-blue-600">Primary Role: Marketing Strategist</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Marketing Content Generation</h3>
                <p className="text-gray-600 mb-4">Advertising copywriting, social media content planning, marketing image design suggestions, etc.</p>
                <div className="text-blue-600">Primary Role: Content Creator</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Market Analysis Reports</h3>
                <p className="text-gray-600 mb-4">Industry trend analysis, competitor analysis reports, market size forecasting, etc.</p>
                <div className="text-blue-600">Primary Role: Data Analyst</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Customer Growth Strategy</h3>
                <p className="text-gray-600 mb-4">Potential customer persona analysis, customer acquisition channel evaluation, customer conversion strategies, etc.</p>
                <div className="text-blue-600">Primary Roles: Marketing Strategist + Data Analyst</div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Waitlist */}
        <section id="waitlist" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Waitlist</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We are launching AI Marketing Team soon. Join our waitlist now to be the first to experience this revolutionary marketing assistant!
            </p>
            <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <div className="text-white font-bold text-2xl">Mercatus</div>
              </div>
              <p className="text-gray-400">© 2025 OPENROPIC PTE.LTD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
