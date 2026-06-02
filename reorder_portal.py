import os

# Define the structured data for all 8 partners
partners_data = [
    {
        "id": 1,
        "name": "Kunal Pawar",
        "role": "Founder & Chief Executive",
        "desc": "Pioneering the corporate trade vision, strategic network expansion, and scaling zero-trust logistics automation. Dedicated to establishing robust merchant connections and highly secure supply lines across global maritime hubs.",
        "img": "images/kunal_pawar.png",
        "stroke_width": "3",
        "custom_img_onclick": "toggleSubNav()",
        "custom_img_title": "Click to view partners",
        "sub_nav_id": "partnerSubNav",
        "sub_nav_active": False,
        "sub_nav_items": [3, 4, 5, 6, 7, 8]  # Yadav, Aditya, Anshu, Kajal, Mihir, Bhavesh
    },
    {
        "id": 2,
        "name": "Roy Daksh",
        "role": "Chief of China Operations & Regional Director",
        "desc": "Directing the mainland China logistics infrastructure, cross-border customs synchronization, Shanghai-to-India maritime shipping lanes, and zero-trust supplier compliance. Roy leads the dedicated Chinese Operations Team to ensure flawless cargo dispatch and zero-friction clearance.",
        "img": "images/roy_daksh.jpeg",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "is_china_leader": True,
        "sub_nav_items": [1, 3, 4, 5, 6, 7, 8]  # Kunal, Yadav, Aditya, Anshu, Kajal, Mihir, Bhavesh
    },
    {
        "id": 3,
        "name": "Yadav Saurabh",
        "role": "Principal Partner & Director",
        "desc": "Directing global sourcing channels, regional cargo coordination, multinational supplier audits, and corporate distribution channels across East Asia and European trade corridors. Oversees high-volume B2B contract negotiations.",
        "img": "images/yadavji.jpeg",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "sub_nav_items": [1, 4, 5, 6, 7, 8]  # Kunal, Aditya, Anshu, Kajal, Mihir, Bhavesh
    },
    {
        "id": 4,
        "name": "Aditya bhavani",
        "role": "Logistics Lead & Director",
        "desc": "Leading customs clearance workflows, supply chain routing optimization, container logistics, and port-to-door delivery systems. Specializes in navigating complex international trade regulations and tariff sync schedules.",
        "img": "D:\\Download Vinay JI\\aditybhai1.jpeg",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "sub_nav_items": [1, 3, 5, 6, 7, 8]  # Kunal, Yadav, Anshu, Kajal, Mihir, Bhavesh
    },
    {
        "id": 5,
        "name": "Anshu Maurya",
        "role": "Supply Chain Lead & Director",
        "desc": "Directing end-to-end supply chain integration, global customs synchronization, port logistics automation, and warehousing networks across Middle East and African trade hubs. Dedicated to operational efficiency and merchant connection security.",
        "img": "images/anshu_maurya.png",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "sub_nav_items": [1, 3, 4, 6, 7, 8]  # Kunal, Yadav, Aditya, Kajal, Mihir, Bhavesh
    },
    {
        "id": 6,
        "name": "Kajal Tiwari",
        "role": "Chief Financial Officer & Director",
        "desc": "Directing corporate finance structures, capital distribution flows, multinational bank syndicates, and currency synchronization systems across global shipping channels. Specializes in auditing high-value logistics accounts and corporate asset security.",
        "img": "images/kajal_tiwari.jpeg",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "sub_nav_items": [1, 3, 4, 5, 7, 8]  # Kunal, Yadav, Aditya, Anshu, Mihir, Bhavesh
    },
    {
        "id": 7,
        "name": "Mistry Mihir",
        "role": "Trade Operations Lead & Director",
        "desc": "Directing cross-border customs integration, international container freight operations, port-to-merchant cargo security systems, and high-efficiency supply chain routing across South Asian maritime hubs. Dedicated to minimizing regulatory friction and streamlining import clearance.",
        "img": "images/mistry_mihir.jpeg",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "sub_nav_items": [1, 3, 4, 5, 6, 8]  # Kunal, Yadav, Aditya, Anshu, Kajal, Bhavesh
    },
    {
        "id": 8,
        "name": "Bhavesh Vaishnav",
        "role": "Executive Director & Regional Manager",
        "desc": "Directing regional business operations, international trade relations, corporate strategic alliances, and container shipping optimization across Middle East and Southeast Asian cargo corridors. Specializes in building key merchant connection partnerships and securing high-volume supply contracts.",
        "img": "images/bhavesh_vaishnav.png",
        "stroke_width": "1.5",
        "custom_img_onclick": None,
        "custom_img_title": None,
        "sub_nav_id": None,
        "sub_nav_active": True,
        "sub_nav_items": [1, 3, 4, 5, 6, 7]  # Kunal, Yadav, Aditya, Anshu, Kajal, Mihir
    }
]

# Generate helper map for sub-nav rendering
partners_by_id = {p["id"]: p for p in partners_data}

header = """<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RBC Partner Portal</title>

  <!-- Google Fonts Outfit & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet">

  <link rel="stylesheet" href="css/style.css?v=12.0">
</head>

<body>
  <!-- Full Screen Matrix Canvas Background -->
  <canvas id="matrixCanvas"></canvas>

  <!-- Premium Fluid Neon Interactive Background Canvas -->
  <canvas id="neonCanvas"></canvas>

  <div class="portal-wrapper">

    <!-- Premium Floating Header -->
    <header class="portal-header">
      <div class="portal-logo-wrap">
        <svg class="portal-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="portal-logo-text">RBC LOGISTICS</span>
      </div>
      <p class="portal-subtitle">OFFICIAL B2B GATEWAY</p>
      <h1 class="portal-title">RBC Board Members</h1>
    </header>

    <!-- ========================================== -->
    <!-- EDITORIAL BORDERLESS ZIG ZAG GALLERY       -->
    <!-- ========================================== -->
    <div class="zigzag-container">

      <!-- Premium Navigation Arrows -->
      <button class="nav-arrow prev-arrow" onclick="navigatePartner('prev')" aria-label="Previous Partner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="nav-arrow next-arrow" onclick="navigatePartner('next')" aria-label="Next Partner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
"""

footer = """    </div>

    <!-- Page Footer -->
    <footer>
      <p class="footer-text">ESTABLISHED 2011 • SURAT • GUANGZHOU • YIWU</p>
      <p class="footer-support">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        ONLINE PORTAL ACTIVE
      </p>
    </footer>

  </div>

  <!-- Interactive Script Logic -->
  <script src="js/script.js?v=12.0"></script>
</body>

</html>
"""

# Let's generate each partner row HTML
rows_html = []
for p in partners_data:
    row_id = f"row{p['id']}"
    img_frame_id = f"imgFrame{p['id']}"
    
    # Active classes
    row_classes = "zigzag-row"
    if p["id"] == 1:
        row_classes += " active-partner visible"
        
    # Image frame attributes
    onclick_attr = f' onclick="{p["custom_img_onclick"]}"' if p["custom_img_onclick"] else ""
    title_attr = f' title="{p["custom_img_title"]}"' if p["custom_img_title"] else ""
    
    row_start = f"""
      <!-- Partner Row {p['id']}: {p['role'].split('&')[0].strip()} ({p['name']}) -->
      <div class="{row_classes}" id="{row_id}">
        <div class="zigzag-img-frame" id="{img_frame_id}"{onclick_attr}{title_attr}>
          <!-- Premium Silhouette Fallback Vector SVG -->
          <div class="profile-vector-fallback">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="{p['stroke_width']}">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <!-- Fades in smoothly and hides fallback when loaded -->
          <img src="{p['img']}" alt="{p['name']}" class="zigzag-img"
            onload="this.style.opacity=1; if(this.previousElementSibling) this.previousElementSibling.style.display='none';">
        </div>
        <div class="zigzag-text-block">
          <span class="zigzag-role">{p['role']}</span>
          <h2 class="zigzag-name">{p['name']}</h2>
          <p class="zigzag-desc">{p['desc']}</p>"""
          
    # Special Chinese Operations Panel
    china_panel = ""
    if p.get("is_china_leader"):
        china_panel = """

          <!-- Special Chinese Team Division Panel -->
          <div class="chinese-team-panel">
            <div class="panel-header">
              <span class="panel-badge">🇨🇳 CHINA SHIELD DIVISION</span>
              <h3 class="panel-title">Chinese Operations Team</h3>
            </div>
            <div class="team-grid">
              <div class="team-member">
                <div class="member-avatar-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="member-vector-fallback">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="chines team/li_wei.png" alt="Li Wei" class="member-avatar" onerror="this.style.display='none';">
                </div>
                <div class="member-info">
                  <span class="member-name">Li Wei</span>
                  <span class="member-role">Port Logistics Chief (Shanghai Hub)</span>
                </div>
              </div>
              <div class="team-member">
                <div class="member-avatar-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="member-vector-fallback">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="chines team/chen_jing.png" alt="Chen Jing" class="member-avatar" onerror="this.style.display='none';">
                </div>
                <div class="member-info">
                  <span class="member-name">Chen Jing</span>
                  <span class="member-role">Shenzhen Clearance Specialist</span>
                </div>
              </div>
              <div class="team-member">
                <div class="member-avatar-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="member-vector-fallback">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="chines team/zhang_min.png" alt="Zhang Min" class="member-avatar" onerror="this.style.display='none';">
                </div>
                <div class="member-info">
                  <span class="member-name">Zhang Min</span>
                  <span class="member-role">Ningbo Supply Chain Liaison</span>
                </div>
              </div>
            </div>
          </div>"""

    # Generate sub-navigation items
    sub_nav_class = "partner-sub-nav"
    if p["sub_nav_active"]:
        sub_nav_class += " active"
    sub_nav_id_attr = f' id="{p["sub_nav_id"]}"' if p["sub_nav_id"] else ""
    
    sub_nav_start = f"""

          <!-- Interactive Partner Sub-Navigation -->
          <div class="{sub_nav_class}"{sub_nav_id_attr}>"""
          
    sub_nav_items_html = []
    for item_id in p["sub_nav_items"]:
        item_data = partners_by_id[item_id]
        item_html = f"""
            <div class="sub-nav-item" onclick="showPartnerDetails('row{item_id}')">
              <img src="{item_data['img']}" class="sub-nav-avatar" alt="{item_data['name']}">
              <span class="sub-nav-name">{item_data['name']}</span>
            </div>"""
        sub_nav_items_html.append(item_html)
        
    sub_nav_end = """
          </div>"""
          
    row_end = """
        </div>
      </div>"""
      
    full_row = row_start + china_panel + sub_nav_start + "".join(sub_nav_items_html) + sub_nav_end + row_end
    rows_html.append(full_row)

# Combine and write to D:\rbc-social-links\index.html
full_html = header + "\n".join(rows_html) + "\n" + footer

with open(r"d:\rbc-social-links\index.html", "w", encoding="utf-8") as f:
    f.write(full_html)

print("Portal integration and reordering successfully completed!")
