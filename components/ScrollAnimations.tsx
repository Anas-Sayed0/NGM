'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
}

export function AnimateOnScroll({
    children,
    animation = 'fadeInUp',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    className = '',
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const animations: Record<string, { initial: React.CSSProperties; animate: React.CSSProperties }> = {
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        },
        fadeInUp: {
            initial: { opacity: 0, transform: 'translateY(40px)' },
            animate: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
            initial: { opacity: 0, transform: 'translateX(-40px)' },
            animate: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
            initial: { opacity: 0, transform: 'translateX(40px)' },
            animate: { opacity: 1, transform: 'translateX(0)' },
        },
        scaleIn: {
            initial: { opacity: 0, transform: 'scale(0.9)' },
            animate: { opacity: 1, transform: 'scale(1)' },
        },
    };

    const anim = animations[animation];

    const style: React.CSSProperties = {
        ...(isVisible ? anim.animate : anim.initial),
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    };

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
}

interface ParallaxProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const scrolled = window.scrollY;
                const elementTop = rect.top + scrolled;
                const relativeScroll = scrolled - elementTop + window.innerHeight;

                if (relativeScroll > 0 && rect.top < window.innerHeight) {
                    setOffset(relativeScroll * speed * 0.1);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: `translateY(${offset}px)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            {children}
        </div>
    );
}

interface StaggerChildrenProps {
    children: ReactNode[];
    staggerDelay?: number;
    animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
    className?: string;
}

export function StaggerChildren({
    children,
    staggerDelay = 0.1,
    animation = 'fadeInUp',
    className = '',
}: StaggerChildrenProps) {
    return (
        <div className={className}>
            {children.map((child, index) => (
                <AnimateOnScroll
                    key={index}
                    animation={animation}
                    delay={index * staggerDelay}
                >
                    {child}
                </AnimateOnScroll>
            ))}
        </div>
    );
}
