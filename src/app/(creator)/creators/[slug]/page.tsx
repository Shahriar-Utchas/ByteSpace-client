import type { Metadata } from "next";

import CreatorProfile from "./_components/CreatorProfile";

export const metadata: Metadata = {
  title: "PurePearl Studio | ByteSpace",
  description: "Explore PurePearl Studio's creator profile and ByteSpace courses.",
};

export default function CreatorProfilePage() {
  return <CreatorProfile />;
}
