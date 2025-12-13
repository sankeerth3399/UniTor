import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  university: string;
  course: string;
  text: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum NavPage {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  TOOLS = 'TOOLS',
  AI_COUNSELOR = 'AI_COUNSELOR',
  CONTACT = 'CONTACT',
  ABOUT = 'ABOUT',
  UNIVERSITY_SHORTLISTING = 'UNIVERSITY_SHORTLISTING',
  BLOCKED_ACCOUNT = 'BLOCKED_ACCOUNT',
  VISA_ASSISTANCE = 'VISA_ASSISTANCE',
  VISA_PROCESSING = 'VISA_PROCESSING',
  APS_ASSISTANCE = 'APS_ASSISTANCE',
  APPLICATION_ASSISTANCE = 'APPLICATION_ASSISTANCE',
  GRE_SUPPORT = 'GRE_SUPPORT',
  LOAN_SERVICES = 'LOAN_SERVICES',
  COURIER_SERVICES = 'COURIER_SERVICES'
}