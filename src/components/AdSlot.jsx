"use client";
import React, { useEffect } from 'react';

const AdSlot = ({ label = "Advertisement", slotType = "header", fallbackSlotId = "1234567890" }) => {
    const adsEnabled = false;

    useEffect(() => {
        if (adsEnabled) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense push error:", e);
            }
        }
    }, [adsEnabled]);

    if (!adsEnabled) return null;

    const slotId = fallbackSlotId;

    return (
        <div className="ad-slot-wrapper" style={{ margin: '2rem 0', textAlign: 'center', width: '100%', overflow: 'hidden' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px', fontWeight: 700 }}>{label}</span>
            <div style={{ background: 'rgba(0,0,0,0.02)', borderRadius: '12px', minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border)' }}>
                <ins className="adsbygoogle"
                    style={{ display: 'block', width: '100%' }}
                    data-ad-client={settings.adClient}
                    data-ad-slot={slotId}
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </div>
    );
};

export default AdSlot;
