import React from 'react';
import { Home, User, Briefcase, Book, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export function MobileNav({ currentSection, onNavigate }: MobileNavProps) {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        <button
          className={`mobile-nav-item ${currentSection === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button
          className={`mobile-nav-item ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => onNavigate('about')}
        >
          <User size={20} />
          <span>About</span>
        </button>
        <button
          className={`mobile-nav-item ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => onNavigate('projects')}
        >
          <Briefcase size={20} />
          <span>Projects</span>
        </button>
        <button
          className={`mobile-nav-item ${currentSection === 'skills' ? 'active' : ''}`}
          onClick={() => onNavigate('skills')}
        >
          <Book size={20} />
          <span>Skills</span>
        </button>
        <button
          className={`mobile-nav-item ${currentSection === 'contact' ? 'active' : ''}`}
          onClick={() => onNavigate('contact')}
        >
          <Mail size={20} />
          <span>Contact</span>
        </button>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
