import { Phone } from '../types';

export const phoneModels: Phone[] = [
  {
    id: 'iphone-15-pro',
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    cameraSpecs: {
      megapixels: 48,
      hasPortraitMode: true,
      hasNightMode: true,
      hasUltrawide: true,
      maxZoom: 10,
      hasProMode: true,
    }
  },
  {
    id: 'iphone-14',
    brand: 'Apple',
    model: 'iPhone 14',
    cameraSpecs: {
      megapixels: 12,
      hasPortraitMode: true,
      hasNightMode: true,
      hasUltrawide: true,
      maxZoom: 5,
      hasProMode: false,
    }
  },
  {
    id: 'samsung-s24-ultra',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    cameraSpecs: {
      megapixels: 200,
      hasPortraitMode: true,
      hasNightMode: true,
      hasUltrawide: true,
      maxZoom: 100,
      hasProMode: true,
    }
  },
  {
    id: 'pixel-8-pro',
    brand: 'Google',
    model: 'Pixel 8 Pro',
    cameraSpecs: {
      megapixels: 50,
      hasPortraitMode: true,
      hasNightMode: true,
      hasUltrawide: true,
      maxZoom: 30,
      hasProMode: true,
    }
  },
  {
    id: 'oneplus-11',
    brand: 'OnePlus',
    model: 'OnePlus 11',
    cameraSpecs: {
      megapixels: 50,
      hasPortraitMode: true,
      hasNightMode: true,
      hasUltrawide: true,
      maxZoom: 6,
      hasProMode: true,
    }
  }
];

export const getPhoneById = (id: string): Phone | undefined => {
  return phoneModels.find(phone => phone.id === id);
};

export const getPhoneCapabilities = (phone: Phone): string[] => {
  const capabilities = [];
  if (phone.cameraSpecs.hasPortraitMode) capabilities.push('Portrait Mode');
  if (phone.cameraSpecs.hasNightMode) capabilities.push('Night Mode');
  if (phone.cameraSpecs.hasUltrawide) capabilities.push('Ultra-wide');
  if (phone.cameraSpecs.hasProMode) capabilities.push('Pro/Manual Mode');
  if (phone.cameraSpecs.maxZoom > 5) capabilities.push('Advanced Zoom');
  return capabilities;
};