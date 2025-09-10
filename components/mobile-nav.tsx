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
      <Button
        variant={currentSection === 'home' ? 'secondary' : 'ghost'}
        className="mobile-nav-item"
        onClick={() => onNavigate('home')}
      >
        <Home size={24} />
        <span>Home</span>
      </Button>
      <Button
        variant={currentSection === 'about' ? 'secondary' : 'ghost'}
        className="mobile-nav-item"
        onClick={() => onNavigate('about')}
      >
        <User size={24} />
        <span>About</span>
      </Button>
      <Button
        variant={currentSection === 'projects' ? 'secondary' : 'ghost'}
        className="mobile-nav-item"
        onClick={() => onNavigate('projects')}
      >
        <Briefcase size={24} />
        <span>Projects</span>
      </Button>
      <Button
        variant={currentSection === 'skills' ? 'secondary' : 'ghost'}
        className="mobile-nav-item"
        onClick={() => onNavigate('skills')}
      >
        <Book size={24} />
        <span>Skills</span>
      </Button>
      <Button
        variant={currentSection === 'contact' ? 'secondary' : 'ghost'}
        className="mobile-nav-item"
        onClick={() => onNavigate('contact')}
      >
        <Mail size={24} />
        <span>Contact</span>
      </Button>
    </nav>
  );
}
