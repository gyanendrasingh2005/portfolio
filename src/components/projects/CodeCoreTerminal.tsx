import React, { useState } from 'react';
import { Tag } from '../ui/Tag';

export const CodeCoreTerminal: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'output'>('editor');
  const [executionCount, setExecutionCount] = useState<number>(1);

  const sampleCode = `// CodeCore Execution Engine // C++20
#include <iostream>
#include <vector>

std::vector<int> solveOptimal(const std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return {left, right};
        if (sum < target) ++left; else --right;
    }
    return {-1, -1};
}`;

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setActiveTab('output');
      setExecutionCount((prev) => prev + 1);
    }, 450);
  };

  return (
    <div className="w-full bg-[#181917] border border-[#333431] rounded-sm overflow-hidden text-left shadow-elevated font-mono text-xs select-none">
      {/* Terminal Header Bar */}
      <div className="bg-[#20211F] px-4 py-3 border-b border-[#333431] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#333431] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#333431] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C65D36] inline-block" />
          </div>
          <span className="text-[#DDD9D1] text-[11px] font-semibold tracking-wider">
            CODECORE // RUNTIME-V2
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`px-2.5 py-1 rounded-xs text-[11px] uppercase tracking-wider transition-colors ${
              activeTab === 'editor'
                ? 'bg-[#282A27] text-[#F5F2EB] border border-[#333431]'
                : 'text-[#B8B5AD] hover:text-[#F5F2EB]'
            }`}
          >
            Source
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('output')}
            className={`px-2.5 py-1 rounded-xs text-[11px] uppercase tracking-wider transition-colors ${
              activeTab === 'output'
                ? 'bg-[#282A27] text-[#F5F2EB] border border-[#333431]'
                : 'text-[#B8B5AD] hover:text-[#F5F2EB]'
            }`}
          >
            Telemetry
          </button>
          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning}
            className="ml-1 px-3 py-1 bg-[#C65D36] hover:bg-[#AD4E2B] text-[#F5F2EB] rounded-xs font-semibold text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#C65D36]"
          >
            {isRunning ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5F2EB] animate-ping" />
                <span>Compiling...</span>
              </>
            ) : (
              <>
                <span>▶ Run Engine</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor View */}
      {activeTab === 'editor' ? (
        <div className="p-4 sm:p-5 bg-[#181917] overflow-x-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#282A27] text-[11px] text-[#B8B5AD]">
            <span>File: solution.cpp</span>
            <span className="text-[#C65D36]">C++20 (GCC 13.2)</span>
          </div>
          <pre className="text-[#F5F2EB] text-[11px] sm:text-xs leading-relaxed font-mono">
            <code>{sampleCode}</code>
          </pre>
        </div>
      ) : (
        /* Telemetry & Output View */
        <div className="p-4 sm:p-5 bg-[#181917] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#282A27] text-[11px]">
            <span className="text-[#B8B5AD]">Test Run #{executionCount}</span>
            <Tag label="VERDICT: ACCEPTED" variant="dark" />
          </div>

          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="p-2.5 bg-[#20211F] border border-[#333431] rounded-xs">
              <div className="text-[10px] text-[#B8B5AD] uppercase">Runtime</div>
              <div className="text-sm font-bold text-[#F5F2EB]">18 ms</div>
            </div>
            <div className="p-2.5 bg-[#20211F] border border-[#333431] rounded-xs">
              <div className="text-[10px] text-[#B8B5AD] uppercase">Memory</div>
              <div className="text-sm font-bold text-[#F5F2EB]">14.2 MB</div>
            </div>
            <div className="p-2.5 bg-[#20211F] border border-[#333431] rounded-xs">
              <div className="text-[10px] text-[#B8B5AD] uppercase">Verdicts</div>
              <div className="text-sm font-bold text-[#C65D36]">4/4 PASS</div>
            </div>
          </div>

          <div className="p-3 bg-[#20211F] border border-[#333431] rounded-xs text-[11px] text-[#B8B5AD] space-y-1">
            <div className="text-[#F5F2EB] font-semibold">Standard Output Stream:</div>
            <div>[Case 1/4] Input: [2, 7, 11, 15], Target: 9 → Output: [0, 1] (OK)</div>
            <div>[Case 2/4] Input: [3, 2, 4], Target: 6 → Output: [0, 2] (OK)</div>
            <div>[Case 3/4] Input: [3, 3], Target: 6 → Output: [0, 1] (OK)</div>
            <div className="text-[#C65D36]">Sandbox isolation status: Secure / Ephemeral container exited.</div>
          </div>
        </div>
      )}

      {/* Terminal Footer Bar */}
      <div className="bg-[#20211F] px-4 py-2 border-t border-[#333431] flex items-center justify-between text-[10px] text-[#B8B5AD]">
        <span>Isolated Docker Worker Node</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D36]" />
          <span>Latency: 42ms</span>
        </span>
      </div>
    </div>
  );
};
