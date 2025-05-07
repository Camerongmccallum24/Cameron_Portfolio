import React from 'react';
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Code, 
  LineChart, 
  Users, 
  Smartphone, 
  CheckCircle, 
  Sparkles, 
  FileDown, 
  MessageSquare, 
  TrendingUp, 
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CaseStudyGPTShowcase() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-16 min-h-screen bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            GPT Showcase
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionizing Customer Success with AI-Powered Solutions that Enhance Client Engagement and Drive Business Growth
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {["React", "TypeScript", "GPT-4", "Customer Success", "AI", "Machine Learning", "NLP"].map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/images/customer-success-gpt.jpg" 
              alt="GPT Showcase Dashboard" 
              className="w-full object-cover rounded-xl"
              style={{ height: "500px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold">Customer Success GPT</h2>
                <p className="text-lg opacity-90">AI-powered platform for modern customer success teams</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-md border border-border">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Customer Success GPT Showcase demonstrates the capabilities of custom GPTs designed 
              specifically for Customer Success Managers. This platform integrates advanced AI features 
              to transform how teams engage with clients and manage their portfolios.
            </p>
            <p className="text-lg text-muted-foreground">
              By harnessing the power of GPT-4, this solution provides real-time sentiment analysis, predictive 
              churn modeling, and intelligent data analytics that significantly reduce manual effort while 
              improving decision-making accuracy and client satisfaction.
            </p>
          </div>
        </motion.div>

        {/* The Challenge */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-border">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Manual Analysis Burden</h3>
              <p className="text-muted-foreground">CSMs spent up to 15 hours weekly analyzing customer data manually, limiting their ability to focus on strategic relationship building</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-border">
              <LineChart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reactive Approach</h3>
              <p className="text-muted-foreground">Teams only identified at-risk accounts after problems emerged, lacking predictive capabilities to address issues proactively</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl border border-border">
              <MessageSquare className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Communication Gaps</h3>
              <p className="text-muted-foreground">Inability to analyze sentiment and context across thousands of client interactions led to missed opportunities and misalignment</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Sentiment Analysis Engine",
                description: "Real-time analysis of customer communication that identifies emotional context, urgency, and hidden concerns across all touchpoints"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Predictive Churn Model",
                description: "AI-powered risk assessment using 50+ data points to identify at-risk accounts up to 45 days before traditional methods"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Automated Insights",
                description: "Intelligent summaries and action recommendations that reduce analysis time by 80% while improving detection of growth opportunities"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Content Generator",
                description: "AI-powered creation of personalized client communications, meeting agendas, and executive summaries tailored to each account"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Performance Dashboard",
                description: "Comprehensive real-time visualization of portfolio health, team performance, and forecast accuracy with customizable alerts"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Integration Framework",
                description: "Seamless connections with CRM, support, and product analytics platforms for a unified view of the customer journey"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8">Results and Impact</h2>
          <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 p-10 rounded-xl border border-primary/20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  metric: "40%", 
                  description: "Reduction in response time to critical client issues",
                  icon: <Zap className="w-6 h-6 text-primary" />
                },
                { 
                  metric: "35%", 
                  description: "Improvement in account risk assessment accuracy",
                  icon: <LineChart className="w-6 h-6 text-primary" />
                },
                { 
                  metric: "30%", 
                  description: "Increase in client satisfaction scores (NPS)",
                  icon: <Users className="w-6 h-6 text-primary" />
                },
                { 
                  metric: "50%", 
                  description: "Gain in CSM productivity through automation",
                  icon: <TrendingUp className="w-6 h-6 text-primary" />
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 bg-background rounded-lg border border-border shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                "The GPT Showcase has transformed how our team operates. We now anticipate client needs before they arise and can focus on strategic growth rather than reactive problem-solving."
              </p>
              <p className="font-medium">— Sarah Johnson, Director of Customer Success at TechSolutions Inc.</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">Technology Stack</h3>
              <ul className="space-y-4">
                {[
                  "GPT-4 API with fine-tuned models for CS domain",
                  "React 18 & TypeScript for frontend development",
                  "Real-time data processing with WebSockets",
                  "Custom machine learning models for predictive analytics",
                  "Natural Language Processing for sentiment analysis",
                  "Secure multi-tenant architecture with role-based access",
                  "RESTful API design with comprehensive documentation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Implementation Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                    <div>Discovery & Requirements Analysis</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                    <div>Custom GPT Model Development</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                    <div>Frontend & Integration Development</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                    <div>Pilot Program & Iterative Refinement</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">5</div>
                    <div>Full Deployment & Continuous Improvement</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid gap-6">
              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
                <img 
                  src="/images/Case-Studys/CS-GPTs/GPT_Structure_1.png" 
                  alt="Technical Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Integration Ecosystem</h3>
                <p className="text-muted-foreground mb-4">
                  The platform seamlessly connects with existing business tools to provide a unified view of customer data.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Salesforce", "HubSpot", "Zendesk", "Intercom", "Slack", "Microsoft Teams"].map((tool) => (
                    <div key={tool} className="text-center p-3 bg-background rounded-lg border border-border text-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Future Roadmap */}
        <motion.div 
          className="mb-20"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8">Future Roadmap</h2>
          <div className="bg-card p-8 rounded-xl border border-border">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Voice Analysis",
                  description: "Expanding sentiment analysis to include voice calls and video meetings",
                  timeline: "Q3 2025"
                },
                {
                  title: "Predictive Revenue Forecasting",
                  description: "AI-powered revenue projections based on customer engagement patterns",
                  timeline: "Q4 2025"
                },
                {
                  title: "Autonomous Relationship Management",
                  description: "Self-optimizing workflows that adapt to each customer's unique needs",
                  timeline: "Q1 2026"
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-sm text-primary font-medium">Planned: {item.timeline}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 p-10 rounded-xl border border-primary/20 mb-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Success Strategy?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how our GPT-powered platform can help your team increase retention, boost satisfaction, 
              and drive account growth with AI-powered intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <FileDown className="w-4 h-4" /> Download Full Case Study
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            <a href="#" className="hover:text-primary transition-colors">More Case Studies</a>
            <a href="#" className="hover:text-primary transition-colors">About Our Technology</a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
