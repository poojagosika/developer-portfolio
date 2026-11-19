import type { ReactNode } from "react";

type IconProps = { className?: string };

function Stroke({
  className,
  children,
  size = 16,
}: IconProps & { children: ReactNode; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Stroke>
  );
}

export function ChevronDown({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m6 9 6 6 6-6" />
    </Stroke>
  );
}

export function Check({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Stroke>
  );
}

export function Mic({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
    </Stroke>
  );
}

export function Cap({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m2.5 9 9.5-4.5L21.500 9 12 13.500z" />
      <path d="M6.500 11.200V16c1.500 1.400 3.400 2 5.500 2s4-.600 5.500-2v-4.800" />
    </Stroke>
  );
}

export function Picture({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3.500" y="4.500" width="17" height="15" rx="2.500" />
      <circle cx="9" cy="10" r="1.600" />
      <path d="m20.500 15-4.500-4.500L7 19.500" />
    </Stroke>
  );
}

export function Play({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="5.500" width="18" height="13" rx="3.500" />
      <path d="m10.500 9.500 4 2.500-4 2.500z" fill="currentColor" />
    </Stroke>
  );
}

export function Cube({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="m12 3 8 4.500v9L12 21l-8-4.500v-9z" />
      <path d="m4 7.500 8 4.500 8-4.500M12 12v9" />
    </Stroke>
  );
}

export function Merge({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="7" cy="6" r="2.200" />
      <circle cx="7" cy="18" r="2.200" />
      <circle cx="17" cy="14" r="2.200" />
      <path d="M7 8.200v7.600M7 8.200c0 4 3 5.800 7.800 5.800" />
    </Stroke>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 8 8 5.500L20 8" />
    </Stroke>
  );
}

export function Send({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M20.500 3.500 10 14M20.500 3.500 14 20.500l-4-6.500-6.500-4z" />
    </Stroke>
  );
}

export function Star({ className }: IconProps) {
  return (
    <Stroke className={className} size={12}>
      <path d="m12 3.500 2.600 5.400 5.900.800-4.300 4.100 1 5.900L12 16.900l-5.200 2.800 1-5.900-4.300-4.100 5.900-.800z" />
    </Stroke>
  );
}

export function GitHub({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2a10 10 0 0 0-3.160 19.490c.500.090.680-.220.680-.480v-1.700c-2.780.600-3.370-1.340-3.370-1.340-.450-1.160-1.110-1.470-1.110-1.470-.910-.620.070-.610.070-.610 1 .070 1.530 1.030 1.530 1.030.890 1.530 2.340 1.090 2.910.830.090-.650.350-1.090.630-1.340-2.220-.250-4.550-1.110-4.550-4.940 0-1.090.390-1.980 1.030-2.680-.100-.250-.450-1.270.100-2.650 0 0 .840-.270 2.750 1.020a9.560 9.560 0 0 1 5 0c1.910-1.290 2.750-1.020 2.750-1.020.550 1.380.200 2.400.100 2.650.640.700 1.030 1.590 1.030 2.680 0 3.840-2.340 4.680-4.570 4.930.360.310.680.920.680 1.850v2.750c0 .270.180.580.690.480A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function LinkedIn({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5.200 3A2.200 2.200 0 0 0 3 5.200v13.600A2.200 2.200 0 0 0 5.200 21h13.600a2.200 2.200 0 0 0 2.200-2.200V5.200A2.200 2.200 0 0 0 18.800 3zm2.300 4.100a1.300 1.300 0 1 1 0 2.600 1.300 1.300 0 0 1 0-2.600zM6.400 10.600h2.200V17H6.400zm3.700 0h2.100v.900c.300-.600 1.100-1.100 2.200-1.100 2.100 0 2.600 1.300 2.600 3.100V17h-2.200v-3.100c0-.800-.200-1.500-1.100-1.500-.900 0-1.400.600-1.400 1.600V17h-2.200z" />
    </svg>
  );
}

export function XLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.300 3.500h3l-6.600 7.500 7.700 9.500h-6l-4.700-5.800-5.400 5.800h-3l7-7.600L1.900 3.500H8l4.300 5.300zm-1 15.200h1.700L7.200 5.200H5.400z" />
    </svg>
  );
}

export function Pin({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.5a7 7 0 0 0-7 7c0 4.6 5.2 10.300 6.300 11.500a1 1 0 0 0 1.400 0C13.800 19.800 19 14.100 19 9.500a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z" />
    </svg>
  );
}

export function External({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v4.500A1.500 1.500 0 0 1 16.500 20h-11A1.500 1.500 0 0 1 4 18.500v-11A1.500 1.500 0 0 1 5.500 6H10" />
    </Stroke>
  );
}

export function Globe({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z" />
    </Stroke>
  );
}

export function Sun({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </Stroke>
  );
}

export function Moon({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.500 10.500z" />
    </Stroke>
  );
}
