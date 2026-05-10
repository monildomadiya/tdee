"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRelatedTools, getToolCategory, TOOL_CATEGORIES } from '../data/toolLinks';

const Sidebar = () => {
  const path = usePathname();
  const related = getRelatedTools(path, 6);
  const category = getToolCategory(path);

  return (
    <aside className="tool-sidebar">
      {/* Future AdSense Placement */}
      <div className="sidebar-ad-placeholder">
        Advertisement
      </div>

      {related.length > 0 && (
        <div className="sidebar-widget">
          <h3>🔗 Related Tools</h3>
          <ul>
            {related.map(tool => (
              <li key={tool.path}>
                <Link href={tool.path} className={path === tool.path ? 'active-link' : ''}>
                  <span className="sidebar-tool-name">{tool.name}</span>
                  <span className="sidebar-tool-desc">{tool.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {Object.values(TOOL_CATEGORIES).map(cat => (
        cat.tools.some(t => t.path !== path) && (
          <div key={cat.id} className="sidebar-widget sidebar-category">
            <h3>{cat.label}</h3>
            <ul>
              {cat.tools.filter(t => t.path !== path).slice(0, 5).map(tool => (
                <li key={tool.path}>
                  <Link href={tool.path}>{tool.short}</Link>
                </li>
              ))}
            </ul>
          </div>
        )
      )).filter(Boolean).slice(0, 2)}

      <div className="sidebar-widget sidebar-cta">
        <div className="sidebar-cta-icon">🔥</div>
        <h3>Start with TDEE</h3>
        <p>Know your maintenance calories before setting any goal.</p>
        <Link href="/tdee-calculator" className="btn" style={{fontSize:'.85rem',padding:'10px 16px'}}>Calculate TDEE →</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
