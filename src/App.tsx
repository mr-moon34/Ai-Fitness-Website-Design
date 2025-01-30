import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Brain, Heart, Trophy, ChevronLeft, ChevronRight, Zap, Camera, Sparkles, Activity, Users, Code, AlertTriangle, Check } from 'lucide-react';

const exercises = [
  {
    id: 1,
    title: "AI Muscular Coach",
    gif: "/images/slider1.jpg",
    description: "Start Your Carrer With AI"
  },
  {
    id: 2,
    title: "Strength Training",
    gif: "/images/home.png",
    description: "Correct Your Posture With AI"
  },
  {
    id: 3,
    title: "Posture Detection",
    gif: "/images/best1.png",
    description: "Enhance your fitness with Correct Posture"
  }
];

const poseEstimationSteps = [
  {
    title: "Real-time Pose Detection",
    description: "Advanced computer vision algorithms track 33 key body points in real-time",
     image: "/images/home.png"
  },
  {
    title: "Form Analysis",
    description: "AI analyzes your exercise form and provides instant feedback",
    image: "/images/pic1.png"
  },
  {
    title: "Progress Tracking",
    description: "Track your improvement over time with detailed metrics and insights",
    image: "/images/pic2.gif"
  }
];

const poseAnalysisSteps = [
  {
    title: "Angle Detection",
    description: "Real-time joint angle measurement for precise form analysis",
    image: "/images/01.png",
    gif: "/images/02.png"
  },
  {
    title: "Posture Analysis",
    description: "Instant feedback on correct vs incorrect form",
    image: "/images/03.png",
    gif: "/images/04.png"
  },
  {
    title: "Performance Metrics",
    description: "Detailed analysis of movement patterns and improvements",
        image: "/images/05.png",
    gif: "/images/06.png"
  }
];

const teamMembers = [
  {
    name: "Eng.Madeeha Memon",
    role: "Supervisor",
    image: "/images/mam1.png",
    description: "Project Supervisor providing guidance and expertise"
  },
  {
    name: "Muhammad",
    role: "Group Leader",
    image: "/images/moon.png",
    description: "Leading the team and overseeing project development"
  },
  {
    name: "Malaak Ali",
    role: "Team Member",
    image: "/images/malaak.jpg",
    description: "Contributing to AI model development and implementation"
  },
  {
    name: "Huzaifa",
    role: "Team Member",
    image: "/images/huzaifa.jpg",
    description: "Frontend development and system integration"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % exercises.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + exercises.length) % exercises.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-600 to-indigo-700 bg-opacity-70 backdrop-blur-md border-b border-gray-800" style={{ backgroundImage: 'url("/images/starry-sky.jpg")' }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-purple-500 animate-float" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Fitness
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-500 transition-colors">Home</a>
              <a href="#how_it_works" className="hover:text-purple-500 transition-colors">How It Works</a>
              <a href="#about_projects" className="hover:text-purple-500 transition-colors">About Project</a>
              <a href="#our_team" className="hover:text-purple-500 transition-colors">Our Team</a>
              <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition-all transform hover:scale-105">
                Start Training
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Home</a>
              <a href="#how_it_works" className="block px-3 py-2 hover:bg-gray-800 rounded-md">How It Works</a>
              <a href="#about_projects" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About Project</a>
              <a href="#our_team" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Our Team</a>
              <button className="w-full bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full transition-all transform hover:scale-105">
                Start Training
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id='home'>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-gray-900/90 z-10" />
          <img
            src={exercises[currentSlide].gif}
            alt="Exercise"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-300">AI-Powered Workout Analysis</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Personal
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  AI Fitness Trainer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your fitness journey with personalized AI-powered workouts tailored just for you.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 animate-pulse-glow">
                Start Your Journey
              </button>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-full aspect-[4/3] bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 animate-pulse-glow">
                <img
                  src={exercises[currentSlide].gif}
                  alt={exercises[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold mb-2">{exercises[currentSlide].title}</h3>
                  <p className="text-gray-300">{exercises[currentSlide].description}</p>
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-24" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-colors group">
              <Brain className="w-12 h-12 text-purple-500 mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-gray-300">Smart workout recommendations based on your progress and goals.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-colors group">
              <Heart className="w-12 h-12 text-purple-500 mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2">Personalized</h3>
              <p className="text-gray-300">Customized training programs that adapt to your fitness level.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-colors group">
              <Trophy className="w-12 h-12 text-purple-500 mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-gray-300">Monitor your achievements and stay motivated with real-time feedback.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-800/30 py-24" id='how_it_works'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our advanced AI technology uses computer vision and machine learning to analyze your movements in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {poseEstimationSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Technology Section */}
      <div className="bg-gray-900 py-24" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Zap className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-300">Powered by MediaPipe</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Pose Estimation Technology
              </h2>
              <p className="text-gray-300 mb-8">
                Our AI system uses MediaPipe's state-of-the-art pose estimation to track 33 key body points in real-time, ensuring perfect form and maximum results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Camera className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Analysis</h4>
                    <p className="text-gray-400">Instant feedback on your form and technique</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Performance Metrics</h4>
                    <p className="text-gray-400">Detailed insights into your movement patterns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWVteW9kaDh5ZzJ0a3VmeDZkdzV2aTg2bHEwM3pucmVnYmNyY2ptYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6GEXJS9l43xOL1hiA0/giphy.gif"
                  alt="Pose Estimation"
                  className="w-50 h-50 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pose Detection Showcase */}
      <div className="bg-gray-800/30 py-24" id='about_projects' >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Code className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Advanced Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by MediaPipe & OpenCV
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our system combines MediaPipe's pose detection with OpenCV and Flask backend for accurate real-time analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {poseAnalysisSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={step.gif}
                      alt={`${step.title} Animation`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Posture Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur opacity-20"></div>
              <div className="relative p-6 bg-gray-800/50 rounded-2xl border border-red-500/30 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                  <h3 className="text-xl font-bold text-red-400">Incorrect Form</h3>
                </div>
                <img
                  src="/images/07.jpg"
                  alt="Incorrect Form"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">Common mistakes in form that can lead to injury or reduced effectiveness</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur opacity-20"></div>
              <div className="relative p-6 bg-gray-800/50 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Check className="w-6 h-6 text-green-400 mr-2" />
                  <h3 className="text-xl font-bold text-green-400">Correct Form</h3>
                </div>
                <img
                  src="/images/09.jpg"


                  alt="Correct Form"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">Proper form ensures maximum benefits and reduces risk of injury</p>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="relative p-6 bg-gray-800/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">Frontend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• React.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">Backend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Flask Python server</li>
                  <li>• OpenCV for image processing</li>
                  <li>• MediaPipe pose detection</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">AI Models</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Custom pose classification</li>
                  <li>• Angle calculation algorithms</li>
                  <li>• Real-time form analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900 py-24" id='our_team'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Users className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Meet Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Minds Behind the Project <span className='text-purple-300' >21BSCS</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Final Year Project Team - Bringing AI-powered fitness innovation to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm overflow-hidden text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-purple-500 rounded-full blur opacity-20"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full ring-4 ring-purple-500/30"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-purple-400 mb-3">{member.role}</div>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;