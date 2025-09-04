import { Tutorial, MemePost } from '../types';

export const tutorials: Tutorial[] = [
  {
    id: 'hold-phone',
    title: 'How to Hold Your Phone (Without Dropping It)',
    level: 'beginner',
    description: 'Master the ancient art of not letting your $1000 camera-phone kiss the pavement.',
    funnyNote: 'Yes, this is a real lesson. We\'ve all been there! 📱💔',
    steps: [
      {
        id: '1',
        title: 'The Death Grip (Not Recommended)',
        description: 'Hold your phone so tight that your knuckles turn white and the phone begs for mercy.',
        funnyNote: 'This is what panic looks like. Relax, it\'s just a photo!',
        emoji: '😬'
      },
      {
        id: '2',
        title: 'The Proper Two-Handed Approach',
        description: 'Use both hands like you\'re handling a newborn kitten made of diamonds.',
        funnyNote: 'Your future self will thank you when your phone isn\'t in 47 pieces.',
        emoji: '🤲'
      },
      {
        id: '3',
        title: 'The Steady Stance',
        description: 'Plant your feet like a tree. A very photogenic tree that doesn\'t shake in the wind.',
        funnyNote: 'No yoga required, but inner peace helps!',
        emoji: '🌳'
      }
    ]
  },
  {
    id: 'find-light',
    title: 'Finding Good Light (AKA Avoiding the Potato Look)',
    level: 'beginner',
    description: 'Learn to spot good lighting faster than you spot free WiFi.',
    funnyNote: 'Lighting can make you look like a movie star or a sleepy potato. Choose wisely! 🥔✨',
    steps: [
      {
        id: '1',
        title: 'The Golden Hour Hunt',
        description: 'That magical time when the sun makes everything look like a fairy tale (not a horror movie).',
        funnyNote: 'It\'s called golden hour, not golden minute. You have time!',
        emoji: '🌅'
      },
      {
        id: '2',
        title: 'Window Light is Your BFF',
        description: 'Find a big window. Stand near it. Boom! You\'re now a photography genius.',
        funnyNote: 'Windows: not just for looking outside and avoiding responsibilities!',
        emoji: '🪟'
      },
      {
        id: '3',
        title: 'Avoid the Overhead Demon',
        description: 'Overhead lights are the villain in every photo story. They create raccoon eyes!',
        funnyNote: 'Unless you\'re going for the "I haven\'t slept in 3 days" aesthetic.',
        emoji: '👹'
      }
    ]
  },
  {
    id: 'composition-magic',
    title: 'Composition Magic: Rule of Thirds (and Why It Actually Works)',
    level: 'intermediate',
    description: 'Turn your random snapshots into "Wait, did you hire a professional?" masterpieces.',
    funnyNote: 'It\'s not actually magic, but your friends don\'t need to know that! 🎩✨',
    steps: [
      {
        id: '1',
        title: 'Grid Lines: Your New Best Friend',
        description: 'Turn on your camera grid. Those lines aren\'t just for decoration!',
        funnyNote: 'Think of them as training wheels for your artistic soul.',
        emoji: '📏'
      },
      {
        id: '2',
        title: 'The Sweet Spot Placement',
        description: 'Put interesting stuff where the lines cross. It\'s like tic-tac-toe for photographers!',
        funnyNote: 'X marks the spot where magic happens!',
        emoji: '✨'
      },
      {
        id: '3',
        title: 'Breaking Rules Like a Rebel',
        description: 'Once you master the rule of thirds, break it dramatically for artistic effect.',
        funnyNote: 'Rules are meant to be broken, but learn them first!',
        emoji: '🎭'
      }
    ],
    requiredFeatures: ['Portrait Mode']
  },
  {
    id: 'cinematic-instagram',
    title: 'How to Capture a Cinematic Instagram Post That Makes People Go WOW',
    level: 'expert',
    description: 'Create posts so stunning that people will think you secretly went to film school.',
    funnyNote: 'Prepare for an influx of "How did you take this?!" comments 🎬',
    steps: [
      {
        id: '1',
        title: 'The Dramatic Angle Hunt',
        description: 'Get low, get high, get weird. Normal angles are for normal people.',
        funnyNote: 'If you\'re not slightly embarrassed taking the photo, you\'re not trying hard enough!',
        emoji: '🎯'
      },
      {
        id: '2',
        title: 'Color Grading Like a Movie Director',
        description: 'Make your colors pop like a blockbuster movie. Think warm shadows, cool highlights.',
        funnyNote: 'You\'re basically Christopher Nolan now, but with a phone.',
        emoji: '🎨'
      },
      {
        id: '3',
        title: 'The Mysterious Subject Placement',
        description: 'Put your subject slightly off-center and let mystery fill the empty space.',
        funnyNote: 'Empty space = dramatic tension = artistic genius!',
        emoji: '🎪'
      }
    ],
    requiredFeatures: ['Pro/Manual Mode', 'Advanced Zoom']
  }
];

export const memeWallPosts: MemePost[] = [
  {
    id: '1',
    title: 'The Blurry Disaster',
    description: 'When you thought you were capturing a magical moment but got abstract art instead.',
    imageUrl: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    tip: 'Hold still for 2 seconds after pressing the shutter. Your phone needs a moment to think!',
    funnyCaption: 'Achievement Unlocked: Accidental Impressionism 🎨'
  },
  {
    id: '2',
    title: 'The Finger Photo Bomb',
    description: 'That awkward moment when your finger decides to be the main character.',
    imageUrl: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg',
    tip: 'Check your grip! Your finger should support the phone, not photobomb your masterpiece.',
    funnyCaption: 'Finger: "This is my moment to shine!" 👆'
  },
  {
    id: '3',
    title: 'The Flash Victim',
    description: 'When flash turns everyone into deer caught in headlights or vampires.',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    tip: 'Turn off flash unless you\'re in a cave. Natural light is almost always better!',
    funnyCaption: 'Flash: Making people look surprised since 1888 ⚡'
  }
];

export const getTutorialsForPhone = (phoneId: string): Tutorial[] => {
  // In a real app, this would filter based on phone capabilities
  // For now, we'll return all tutorials
  return tutorials;
};