"use client"

import { useState } from "react"
import { Sparkles, X, ExternalLink, Info } from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("VorShift")
  const [activeExploit, setActiveExploit] = useState(null)

  const tabs = [
    { id: "VorShift", title: "VorShift", icon: <Sparkles className="w-5 h-5" /> },
    { id: "Games", title: "Games", icon: <Sparkles className="w-5 h-5" /> },
    { id: "Proxies", title: "Proxies", icon: <Sparkles className="w-5 h-5" /> },
    { id: "Exploits", title: "Exploits", icon: <Sparkles className="w-5 h-5" /> },
  ]

  const exploits = [
    {
      id: "extremover",
      title: "ExtRemover",
      compatibility: "Chrome OS",
      instructions: `Welcome to ExtRemover!

This website offers a variety of advanced exploits for Chrome OS devices, including techniques that may require hardware modifications to your Chromebook.

You can refer to the exploits on this website to discover or create your own custom solutions. The community-tested methods can help you gain more control over your device.

For the complete collection of tools and tutorials, please visit the official ExtRemover website.`,
      website: "https://ext-remover.net",
    },
    {
      id: "guest-mode",
      title: "Guest Mode",
      compatibility: "Chrome OS",
      instructions: `Guest Mode

Powerwash your chromebook by pressing power+esc+refresh
Press ctrl+d, then after the loading screen press enter
You should be met with a "you can not enter developer mode," or something along those lines. 
Press enter again and you will be met with the "Welcome to your chromebook!" screen.
Go to wifi, and connect to a wifi network that you know the password of. (ex: home wifi, guest wifi at school, etc.)
Go to network and change "Automatic name servers" to "Custom name servers"
Set all the boxes to "0.0.0.0"
Press "Let's get started!"
Press "Join Wi-Fi Network," and type random things.
Join back to your wifi network, and immediately press shift+alt+s followed by the power button, and then restart your chromebook.
After a long loading screen, press "Guest mode," and then "Accept and continue."
To exit guest mode, press shift+alt+s, and then press "Exit Guest Mode."`,
    },
    {
      id: "data-url-generator",
      title: "Data URL Generator",
      compatibility: "Web Browsers",
      instructions: `Data URL Generator

Enter the following URL in your browser.

data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3EData%20URL%20Generator%3C%2Ftitle%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20Arial%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23f0f0f0%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.container%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20600px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%2050px%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%200%2010px%20rgba(0%2C0%2C0%2C0.1)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20textarea%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20200px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20button%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010px%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23007bff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%203px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20button%3Ahover%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%230056b3%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23copyButton%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.data-url-container%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20100%25%3B%20%2F*%20Allow%20the%20container%20to%20grow%20with%20its%20parent%20*%2F%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow-x%3A%20auto%3B%20%2F*%20Enable%20horizontal%20scrolling%20if%20needed%20*%2F%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Ch1%3EData%20URL%20Generator%3C%2Fh1%3E%0A%20%20%20%20%3Cp%3EEnter%20your%20HTML%20code%20below%3A%3C%2Fp%3E%0A%20%20%20%20%3Ctextarea%20id%3D%22htmlCode%22%20oninput%3D%22generateDataUrl()%22%3E%3C%2Ftextarea%3E%0A%20%20%20%20%3C!--%20Added%20a%20container%20for%20the%20data%20URL%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22data-url-container%22%3E%0A%20%20%20%20%20%20%20%20%3Cp%20id%3D%22dataUrl%22%20class%3D%22data-url%22%3E%3C%2Fp%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cbutton%20id%3D%22copyButton%22%20onclick%3D%22copyToClipboard()%22%20disabled%3ECopy%20to%20Clipboard%3C%2Fbutton%3E%0A%3C%2Fdiv%3E%0A%0A%20%20%20%20%3Cscript%3E%0A%20%20%20%20function%20generateDataUrl()%20%7B%0A%20%20%20%20%20%20%20%20var%20htmlCode%20%3D%20document.getElementById('htmlCode').value%3B%0A%20%20%20%20%20%20%20%20var%20encodedHtml%20%3D%20encodeURIComponent(htmlCode)%3B%0A%20%20%20%20%20%20%20%20var%20dataUrl%20%3D%20'data%3Atext%2Fhtml%3Bcharset%3Dutf-8%2C'%20%2B%20encodedHtml%3B%0A%20%20%20%20%20%20%20%20document.getElementById('dataUrl').innerText%20%3D%20dataUrl%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20Ensure%20copy%20button%20is%20enabled%20after%20generating%20data%20URL%0A%20%20%20%20%20%20%20%20document.getElementById('copyButton').disabled%20%3D%20false%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20copyToClipboard()%20%7B%0A%20%20%20%20%20%20%20%20var%20dataUrl%20%3D%20document.getElementById('dataUrl').innerText%3B%0A%20%20%20%20%20%20%20%20var%20tempInput%20%3D%20document.createElement('input')%3B%0A%20%20%20%20%20%20%20%20tempInput.value%20%3D%20dataUrl%3B%0A%20%20%20%20%20%20%20%20document.body.appendChild(tempInput)%3B%0A%20%20%20%20%20%20%20%20tempInput.select()%3B%0A%20%20%20%20%20%20%20%20document.execCommand('copy')%3B%0A%20%20%20%20%20%20%20%20document.body.removeChild(tempInput)%3B%0A%20%20%20%20%20%20%20%20alert('Data%20URL%20copied%20to%20clipboard!')%3B%0A%20%20%20%20%7D%0A%20%20%20%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A`,
    },
    {
      id: "mask3r",
      title: "Mask3r",
      compatibility: "Web Browsers",
      instructions: `Mask3r

Enter the following URL in your browser. 

data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%3Ctitle%3EMask3r%3C%2Ftitle%3E%0A%20%20%3Clink%20rel%3D%22shortcut%20icon%22%20type%3D%22image%2Fpng%22%20href%3D%22https%3A%2F%2Fraw.githubusercontent.com%2FBlobby-Boi%2FMask3r%2Frefs%2Fheads%2Fmain%2Ffavicon.png%22%3E%0A%20%20%3Cscript%3E%0A%20%20%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20main%20%3D%20%22https%3A%2F%2Fraw.githubusercontent.com%2FBlobby-Boi%2FMask3r%2Frefs%2Fheads%2Fmain%2Findex.html%22%3B%0A%20%20%20%20%20%20const%20fallback%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FBlobby-Boi%2FMask3r%2Findex.html%22%3B%0A%0A%20%20%20%20%20%20fetch(main)%0A%20%20%20%20%20%20%20%20.then(response%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(!response.ok)%20throw%20new%20Error(%22Primary%20URL%20failed%22)%3B%0A%20%20%20%20%20%20%20%20%20%20return%20response.text()%3B%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20.catch(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20fetch(fallback).then(response%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!response.ok)%20throw%20new%20Error(%22Fallback%20URL%20failed%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20response.text()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20.then(html%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20document.open()%3B%0A%20%20%20%20%20%20%20%20%20%20document.write(html)%3B%0A%20%20%20%20%20%20%20%20%20%20document.close()%3B%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D)%3B%0A%20%20%3C%2Fscript%3E%0A%3C%2Fhead%3E%0A%3C%2Fhtml%3E`,
    },
    {
      id: "extprint3r",
      title: "ExtPrint3r",
      compatibility: "Chrome OS",
      instructions: `ExtPrint3r

Enter the following URL in your browser.

data:text/html;charset=utf-8,<!DOCTYPE html>%0A<html lang%3D"en">%0A<head>%0A  <meta charset%3D"UTF-8">%0A  <meta name%3D"viewport" content%3D"width%3Ddevice-width%2C initial-scale%3D1.0">%0A  <title>ExtPrint3r</title>%0A  <style>%0A    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f0f0; }%0A    .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }%0A    h1 { color: #333; }%0A    button { background: #4CAF50; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; margin-top: 10px; }%0A    button:hover { background: #45a049; }%0A  </style>%0A</head>%0A<body>%0A  <div class%3D"container">%0A    <h1>ExtPrint3r</h1>%0A    <p>This tool allows you to bypass print restrictions on Chrome OS devices.</p>%0A    <div id%3D"status">Checking system compatibility...</div>%0A    <button id%3D"startBtn" style%3D"display:none;">Start ExtPrint3r</button>%0A  </div>%0A  <script>%0A    // Simulate compatibility check%0A    setTimeout(() => {%0A      document.getElementById('status').textContent = 'System compatible! Ready to use.';%0A      document.getElementById('startBtn').style.display = 'block';%0A    }, 1500);%0A    %0A    // Button event listener%0A    document.getElementById('startBtn').addEventListener('click', () => {%0A      alert('ExtPrint3r activated! You can now print without restrictions.');%0A    });%0A  </script>%0A</body>%0A</html>`,
    },
  ]

  // Function to handle showing exploit instructions
  const handleShowInstructions = (exploitId) => {
    setActiveExploit(exploitId)
  }

  // Function to close the instructions popup
  const handleCloseInstructions = () => {
    setActiveExploit(null)
  }

  // Find the active exploit if one is selected
  const activeExploitData = activeExploit ? exploits.find((exploit) => exploit.id === activeExploit) : null

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-purple-800 bg-gradient-to-r from-black to-purple-900">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-glow">
            VorShift
          </h1>
          <p className="text-center text-gray-300 mt-2">Your ultimate gaming and exploits hub</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-900 border-b border-purple-800">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <li key={tab.id} className="py-2">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-t-lg flex items-center space-x-2 transition-all ${
                    activeTab === tab.id
                      ? "bg-purple-900 text-white shadow-neon"
                      : "bg-gray-800 text-gray-300 hover:bg-purple-800"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* VorShift Tab Content */}
        {activeTab === "VorShift" && (
          <div className="animate-fade-in">
            <div className="bg-gray-900 border border-purple-800 rounded-lg p-6 mb-8 shadow-neon">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Welcome to VorShift</h2>
              <p className="text-gray-300 mb-4">
                VorShift is your ultimate platform for games, proxies, and exploits. Explore our collection and enhance
                your gaming experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <FeatureCard
                  title="Games"
                  description="Access a wide variety of games directly from your browser."
                  icon={<Sparkles className="w-10 h-10 text-purple-400" />}
                />
                <FeatureCard
                  title="Proxies"
                  description="Bypass restrictions and access blocked content with our proxies."
                  icon={<Sparkles className="w-10 h-10 text-purple-400" />}
                />
                <FeatureCard
                  title="Exploits"
                  description="Discover powerful exploits for various platforms and games."
                  icon={<Sparkles className="w-10 h-10 text-purple-400" />}
                />
              </div>
            </div>
          </div>
        )}

        {/* Games Tab Content */}
        {activeTab === "Games" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Popular Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <GameCard
                title="Neon Racer"
                description="Race through neon-lit streets in this fast-paced arcade game."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <GameCard
                title="Pixel Dungeon"
                description="Explore procedurally generated dungeons in this roguelike adventure."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <GameCard
                title="Space Invaders X"
                description="A modern take on the classic arcade game with new power-ups."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <GameCard
                title="Cyber Puzzle"
                description="Test your brain with challenging puzzles in a cyberpunk setting."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <GameCard
                title="Zombie Survival"
                description="Survive waves of zombies in this intense action game."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <GameCard
                title="Retro Platformer"
                description="Jump and run through colorful levels in this retro-style platformer."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        )}

        {/* Proxies Tab Content */}
        {activeTab === "Proxies" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Web Proxies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProxyCard
                title="UltraProxy"
                description="Fast and secure web proxy with SSL encryption."
                status="Online"
              />
              <ProxyCard
                title="StealthSurf"
                description="Browse anonymously with our stealth proxy service."
                status="Online"
              />
              <ProxyCard
                title="QuickAccess"
                description="Lightweight proxy for quick access to blocked sites."
                status="Online"
              />
              <ProxyCard
                title="ProxyShield"
                description="Advanced proxy with additional security features."
                status="Maintenance"
              />
              <ProxyCard
                title="WebUnblocker"
                description="Unblock websites and access restricted content."
                status="Online"
              />
              <ProxyCard
                title="SecureConnect"
                description="Encrypted proxy connection for maximum privacy."
                status="Online"
              />
            </div>
          </div>
        )}

        {/* Exploits Tab Content */}
        {activeTab === "Exploits" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Available Exploits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {exploits.map((exploit) => (
                <ExploitCard
                  key={exploit.id}
                  title={exploit.title}
                  compatibility={exploit.compatibility}
                  onInstructionsClick={() => handleShowInstructions(exploit.id)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Instructions Popup */}
      {activeExploitData && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-purple-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-purple-800">
              <h3 className="text-xl font-bold text-purple-400">{activeExploitData.title} Instructions</h3>
              <button onClick={handleCloseInstructions} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-gray-800 p-4 rounded-lg overflow-x-auto">
                {activeExploitData.instructions}
              </pre>
              {activeExploitData.website && (
                <div className="mt-4">
                  <a
                    href={activeExploitData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Official Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for active exploit */}
      {activeExploitData && (
        <div className="fixed bottom-4 right-4 bg-gray-900 border border-purple-800 rounded-lg shadow-neon p-4 max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-bold text-purple-400">{activeExploitData.title}</h4>
            <button onClick={handleCloseInstructions} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="text-xs text-gray-300">
            <p>Instructions open</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Feature Card Component
function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800 border border-purple-700 rounded-lg p-6 hover:shadow-neon transition-all duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-2 text-purple-300">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  )
}

// Game Card Component
function GameCard({ title, description, imageUrl }) {
  return (
    <div className="bg-gray-800 border border-purple-700 rounded-lg overflow-hidden hover:shadow-neon transition-all duration-300">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-purple-300">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="w-full bg-purple-700 hover:bg-purple-600 text-white py-2 rounded-md transition-colors">
          Play Now
        </button>
      </div>
    </div>
  )
}

// Proxy Card Component
function ProxyCard({ title, description, status }) {
  return (
    <div className="bg-gray-800 border border-purple-700 rounded-lg p-6 hover:shadow-neon transition-all duration-300">
      <h3 className="text-xl font-bold mb-2 text-purple-300">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            status === "Online" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"
          }`}
        >
          {status}
        </span>
        <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors">
          Connect
        </button>
      </div>
    </div>
  )
}

// Exploit Card Component
function ExploitCard({ title, compatibility, onInstructionsClick }) {
  return (
    <div className="bg-gray-800 border border-purple-700 rounded-lg p-6 hover:shadow-neon transition-all duration-300">
      <h3 className="text-xl font-bold mb-2 text-purple-300">{title}</h3>
      <p className="text-gray-400 mb-4">Compatibility: {compatibility}</p>
      <button
        onClick={onInstructionsClick}
        className="w-full bg-purple-700 hover:bg-purple-600 text-white py-2 rounded-md transition-colors flex items-center justify-center"
      >
        <Info className="w-4 h-4 mr-2" />
        Instructions
      </button>
    </div>
  )
}
