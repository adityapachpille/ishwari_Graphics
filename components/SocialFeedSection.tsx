'use client';

import React from 'react';

export default function SocialFeedSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Follow Us on Social Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Instagram Feed */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Instagram Feed</h3>
          <iframe
            src="YOUR_INSTAGRAM_WIDGET_EMBED_URL"
            width="100%"
            height="500"
            frameBorder={0}
            scrolling="no"
            allowTransparency={true}
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>

        {/* Facebook Feed */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Facebook Feed</h3>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qJpfpyTx%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </section>
  );
}
