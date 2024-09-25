---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "BCache"

project:
  title: "BCache"
  type: "C++"
  url: "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/"
  project_official_url: "https://bcache.evilpiepirate.org/"
  logo: "/public/assets/projectLogos/bcache.png"
  overview: "Bcache is a Linux kernel block layer cache. It allows one or more fast disk drives such as flash-based solid state drives (SSDs) to act as a cache for one or more slower hard disk drives. Hard drives are cheap and big, SSDs are fast but small and expensive. Wouldn't it be nice if you could transparently get the advantages of both? With Bcache, you can have your cake and eat it too. Bcache patches for the Linux kernel allow one to use SSDs to cache other block devices. It's analogous to L2Arc for ZFS, but Bcache also does writeback caching (besides just write through caching), and it's filesystem agnostic. It's designed to be switched on with a minimum of effort, and to work well without configuration on any setup. By default it won't cache sequential IO, just the random reads and writes that SSDs excel at. It's meant to be suitable for desktops, servers, high end storage arrays, and perhaps even embedded. The design goal is to be just as fast as the SSD and cached device (depending on cache hit vs. miss, and writethrough vs. writeback writes) to within the margin of error. It's not quite there yet, mostly for sequential reads. But testing has shown that it is emphatically possible, and even in some cases to do better - primarily random writes. It's also designed to be safe. Reliability is critical for anything that does writeback caching; if it breaks, you will lose data. Bcache is meant to be a superior alternative to battery backed up raid controllers, thus it must be reliable even if the power cord is yanked out. It won't return a write as completed until everything necessary to locate it is on stable storage, nor will writes ever be seen as partially completed (or worse, missing) in the event of power failure. A large amount of work has gone into making this work efficiently. Bcache is designed around the performance characteristics of SSDs. It's designed to minimize write inflation to the greatest extent possible, and never itself does random writes. It turns random writes into sequential writes - first when it writes them to the SSD, and then with writeback caching it can use your SSD to buffer gigabytes of writes and write them all out in order to your hard drive or raid array. If you've got a RAID6, you're probably aware of the painful random write penalty, and the expensive controllers with battery backup people buy to mitigate them. Now, you can use Linux's excellent software RAID and still get fast random writes, even on cheap hardware."

supported_releases:
  - release:
    version: "v6.5-rc1"
    url: "https://github.com/torvalds/linux/releases/tag/v6.5-rc1"
  - release:
    version: "v6.4"
    url: "https://github.com/torvalds/linux/releases/tag/v6.4"
  - release:
    version: "v6.4-rc7"
    url: "https://github.com/torvalds/linux/releases/tag/v6.4-rc7"
---

<p>BCache</p>
