"use client";

import { useState } from 'react';
import { 
  ChartBarIcon, DocumentTextIcon, EnvelopeIcon, 
  CogIcon, HomeIcon, PlusCircleIcon, UserCircleIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-black text-white border-r border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">ApplyAI</h1>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-8 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
              <UserCircleIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className="font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Free Plan</p>
            </div>
          </div>
          
          <nav>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeTab === 'dashboard' 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <HomeIcon className="h-5 w-5 mr-3" />
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('applications')}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeTab === 'applications' 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <DocumentTextIcon className="h-5 w-5 mr-3" />
                  Applications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('emails')}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeTab === 'emails' 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <EnvelopeIcon className="h-5 w-5 mr-3" />
                  Email Templates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeTab === 'analytics' 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <ChartBarIcon className="h-5 w-5 mr-3" />
                  Analytics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeTab === 'settings' 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <CogIcon className="h-5 w-5 mr-3" />
                  Settings
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 to-black">
        {/* Top Navigation */}
        <header className="bg-gray-900 border-b border-gray-800">
          <div className="flex justify-between items-center px-8 py-5">
            <h2 className="text-xl font-medium text-white">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'applications' && 'My Applications'}
              {activeTab === 'emails' && 'Email Templates'}
              {activeTab === 'analytics' && 'Application Analytics'}
              {activeTab === 'settings' && 'Account Settings'}
            </h2>
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-lg flex items-center hover:opacity-90 transition-opacity">
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              New Application
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="p-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
                <p className="text-sm font-medium text-gray-400">Total Applications</p>
                <p className="text-3xl font-semibold text-white mt-1">24</p>
                <div className="mt-2 text-green-500 text-sm flex items-center">
                  <span className="mr-1">↑</span> 12% from last month
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
                <p className="text-sm font-medium text-gray-400">Pending</p>
                <p className="text-3xl font-semibold text-white mt-1">16</p>
                <div className="mt-2 text-gray-400 text-sm">Awaiting response</div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
                <p className="text-sm font-medium text-gray-400">Interviews</p>
                <p className="text-3xl font-semibold text-white mt-1">5</p>
                <div className="mt-2 text-green-500 text-sm flex items-center">
                  <span className="mr-1">↑</span> 3 from last month
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
                <p className="text-sm font-medium text-gray-400">Rejections</p>
                <p className="text-3xl font-semibold text-white mt-1">3</p>
                <div className="mt-2 text-gray-400 text-sm">7 still pending</div>
              </div>
            </div>
            
            {/* Recent Applications */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl mb-8">
              <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Recent Applications</h3>
                <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">Last 30 days</span>
              </div>
              <div className="overflow-hidden overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date Applied</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Next Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-medium">
                            G
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">Google</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Software Engineer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Mar 1, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-300">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Follow up on Mar 8</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-medium">
                            M
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">Microsoft</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Frontend Developer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Feb 28, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-300">
                          Interview
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Interview on Mar 10</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-medium">
                            A
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">Amazon</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Full Stack Developer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Feb 25, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/30 text-red-300">
                          Rejected
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-700">
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center">
                  View all applications
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* AI Suggestions */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
              <div className="px-6 py-4 border-b border-gray-700">
                <h3 className="text-lg font-medium text-white flex items-center">
                  <span className="text-indigo-400 mr-2">✨</span> AI Suggestions
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="p-4 border border-indigo-900/50 bg-indigo-900/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-gray-200">
                    <span className="font-bold text-indigo-400">Suggestion:</span> Based on your application to Microsoft, consider highlighting your React experience more prominently in your CV.
                  </p>
                </div>
                <div className="p-4 border border-blue-900/50 bg-blue-900/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-gray-200">
                    <span className="font-bold text-blue-400">Insight:</span> Applications with custom cover letters get 40% more responses. Try adding more personalization to your emails.
                  </p>
                </div>
                <div className="p-4 border border-emerald-900/50 bg-emerald-900/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-gray-200">
                    <span className="font-bold text-emerald-400">Opportunity:</span> We found 3 new job openings that match your profile. Click here to review them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'dashboard' && (
          <div className="p-6 text-center text-gray-400 mt-20">
            <div className="inline-block p-6 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-lg">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content would appear here.</p>
              <p className="mt-2 text-sm">This section is under development.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}