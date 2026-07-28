import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite que os placeholders .svg sejam servidos pelo next/image.
    // Ao trocar os placeholders por fotos .jpg/.png reais isso continua seguro,
    // pois os SVGs aqui são próprios (sem scripts) e servidos sob CSP restritiva.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
