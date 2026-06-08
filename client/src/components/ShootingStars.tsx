import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 3; i++) {
        newStars.push({
          id: Math.random(),
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.left}%`,
            animation: `shooting-star ${star.duration}s ease-in forwards`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
}
