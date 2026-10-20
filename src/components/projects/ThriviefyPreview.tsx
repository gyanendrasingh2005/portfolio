import React, { useState } from 'react';

export const ThriviefyPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'emergency' | 'directory'>('emergency');
  const [dispatched, setDispatched] = useState<boolean>(false);

  const hospitals = [
    { name: 'City Central Super Specialty Hospital', distance: '1.2 km', eta: '4 min', icu: 6, status: 'Available' },
    { name: 'Metro Trauma & Emergency Care', distance: '2.8 km', eta: '8 min', icu: 2, status: 'High Occupancy' },
    { name: 'Apex Multi-Specialty Clinic', distance: '4.1 km', eta: '12 min', icu: 9, status: 'Available' },
  ];

  return (
    <div
      className="w-full bg-[#080808] border border-[rgba(241,238,232,0.12)] rounded-xl p-5 sm:p-6 space-y-4 shadow-2xl select-none font-mono text-xs text-[#dedad4]"
      role="region"
      aria-label="Thriviefy Healthcare & Emergency UI Preview"
    >
      {/* Top Application Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(241,238,232,0.08)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff8c59]" />
          </div>
          <span className="font-serif font-bold text-sm text-[#f1eee8] tracking-tight ml-1">
            Thriviefy
          </span>
          <span className="text-[rgba(241,238,232,0.2)]">/</span>
          <span className="text-[10px] text-[#aaa9a4] uppercase tracking-wider">
            Medical Services &amp; Emergency
          </span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-[#121212] p-1 rounded-md border border-[rgba(241,238,232,0.1)]">
          <button
            type="button"
            onClick={() => setActiveTab('emergency')}
            className={`px-2 py-0.5 rounded text-[10px] font-sans tracking-wide transition-colors ${
              activeTab === 'emergency'
                ? 'bg-[#ff8c59] text-[#030303] font-semibold'
                : 'text-[#aaa9a4] hover:text-[#f1eee8]'
            }`}
          >
            Ambulance &amp; Emergency
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('directory')}
            className={`px-2 py-0.5 rounded text-[10px] font-sans tracking-wide transition-colors ${
              activeTab === 'directory'
                ? 'bg-[#ff8c59] text-[#030303] font-semibold'
                : 'text-[#aaa9a4] hover:text-[#f1eee8]'
            }`}
          >
            Doctors &amp; Medicine
          </button>
        </div>
      </div>

      {activeTab === 'emergency' ? (
        /* EMERGENCY & AMBULANCE PROXIMITY TRACKING */
        <div className="space-y-3">
          {/* Geolocation Status Card */}
          <div className="p-3.5 bg-[#0d0d0d] border border-[rgba(255,140,89,0.25)] rounded-lg flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#ff8c59] block">
                GEOLOCATION PROXIMITY ENGINE
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl text-[#f1eee8]">
                  Ghaziabad, UP
                </span>
                <span className="text-[10px] text-[#22c55e] font-sans">
                  ● GPS Signal Active
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDispatched(true)}
              className={`px-3 py-1.5 rounded font-sans text-xs transition-all ${
                dispatched
                  ? 'bg-[#22c55e] text-[#030303] font-bold'
                  : 'bg-[#ff8c59] text-[#030303] font-bold hover:bg-[#ffa073]'
              }`}
            >
              {dispatched ? '✓ Ambulance En Route' : '🚨 Dispatch Ambulance'}
            </button>
          </div>

          {/* Ranked Hospitals By Distance */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[10px] text-[#aaa9a4] uppercase">
              <span>Nearby Emergency Hospitals (Ranked by Proximity)</span>
              <span>Sorted: Distance ASC</span>
            </div>

            <div className="space-y-1.5">
              {hospitals.map((hosp, idx) => (
                <div
                  key={hosp.name}
                  className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#ff8c59] text-[11px]">0{idx + 1}</span>
                      <span className="font-sans text-[#f1eee8] font-medium text-xs">{hosp.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-[#aaa9a4]">
                      <span>Dist: {hosp.distance}</span>
                      <span>•</span>
                      <span>ETA: {hosp.eta}</span>
                      <span>•</span>
                      <span className="text-[#22c55e]">{hosp.icu} ICU Beds Open</span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 bg-[#171717] text-[10px] text-[#dedad4] rounded border border-[rgba(241,238,232,0.08)]">
                    {hosp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* DIRECTORY VIEW */
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#aaa9a4] block">Doctors On-Call</span>
              <span className="font-serif text-lg text-[#f1eee8]">24 Online</span>
            </div>
            <div className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#aaa9a4] block">Critical Drugs</span>
              <span className="font-serif text-lg text-[#22c55e]">Verified</span>
            </div>
            <div className="p-2.5 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-[#aaa9a4] block">Avg Response</span>
              <span className="font-serif text-lg text-[#ff8c59]">&lt; 3 min</span>
            </div>
          </div>

          <div className="p-3 bg-[#0d0d0d] border border-[rgba(241,238,232,0.08)] rounded space-y-2 font-sans text-xs">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#aaa9a4] uppercase">
              <span>Doctor Specialties &amp; Medicine Inventory</span>
              <span>EJS Rendered</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#dedad4]">
              <div className="p-2 bg-[#141414] rounded">
                <span className="text-[#ff8c59] block font-medium">Cardiology &amp; Trauma</span>
                <span className="text-[10px] text-[#aaa9a4]">Dr. S. Verma (Available now)</span>
              </div>
              <div className="p-2 bg-[#141414] rounded">
                <span className="text-[#ff8c59] block font-medium">Emergency Pediatrics</span>
                <span className="text-[10px] text-[#aaa9a4]">Dr. R. Gupta (On duty)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proximity Telemetry Output */}
      <div className="p-2.5 bg-[#030303] text-[#aaa9a4] rounded border border-[rgba(241,238,232,0.06)] font-mono text-[10px] space-y-1">
        <div className="flex items-center justify-between text-[9px] border-b border-[rgba(241,238,232,0.06)] pb-1">
          <span className="text-[#dedad4]">// Proximity Distance Calculation Stream</span>
          <span className="text-[#ff8c59]">Haversine Calculation: 0.8ms</span>
        </div>
        <p className="truncate">
          Query: GeoNear({`{ lat: 28.7041, lng: 77.1025 }`}) &rarr; Rank By Distance ASC &rarr; Render EJS Response
        </p>
      </div>

      {/* Bottom Architectural Spec */}
      <div className="pt-2 border-t border-[rgba(241,238,232,0.08)] flex items-center justify-between text-[10px] text-[#aaa9a4]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c59]" />
          <span>Geolocation &amp; Ambulance Services</span>
        </div>
        <span className="font-mono text-[#dedad4]">Node.js + Express + MongoDB + EJS</span>
      </div>
    </div>
  );
};
