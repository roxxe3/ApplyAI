"use client";

import { useState } from 'react';
import { 
  ChartBarIcon, DocumentTextIcon, EnvelopeIcon, 
  CogIcon, HomeIcon, PlusCircleIcon, UserCircleIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-indigo-800 text-white">
        <div className="p-4 border-b border-indigo-700">
          <h1 className="text-2xl font-bold">ApplyAI</h1>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-6">
            <UserCircleIcon className="h-10 w-10 text-white mr-3" />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-indigo-200">Free Plan</p>
            </div>
          </div>
          
          <nav>
            <ul>
              <li className="mb-2">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center w-full p-3 rounded-md ${
                    activeTab === 'dashboard' ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                  }`}
                >
                  <HomeIcon className="h-5 w-5 mr-3" />
                  Dashboard
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => setActiveTab('applications')}
                  className={`flex items-center w-full p-3 rounded-md ${
                    activeTab === 'applications' ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                  }`}
                >
                  <DocumentTextIcon className="h-5 w-5 mr-3" />
                  Applications
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => setActiveTab('emails')}
                  className={`flex items-center w-full p-3 rounded-md ${
                    activeTab === 'emails' ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                  }`}
                >
                  <EnvelopeIcon className="h-5 w-5 mr-3" />
                  Email Templates
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center w-full p-3 rounded-md ${
                    activeTab === 'analytics' ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                  }`}
                >
                  <ChartBarIcon className="h-5 w-5 mr-3" />
                  Analytics
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full p-3 rounded-md ${
                    activeTab === 'settings' ? 'bg-indigo-700' : 'hover:bg-indigo-700'
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
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'applications' && 'My Applications'}
              {activeTab === 'emails' && 'Email Templates'}
              {activeTab === 'analytics' && 'Application Analytics'}
              {activeTab === 'settings' && 'Account Settings'}
            </h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700 transition">
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              New Application
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="p-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm font-medium text-gray-500">Total Applications</p>
                <p className="text-3xl font-bold text-gray-800">24</p>
                <div className="mt-2 text-green-600 text-sm">↑ 12% from last month</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-3xl font-bold text-gray-800">16</p>
                <div className="mt-2 text-gray-500 text-sm">Awaiting response</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm font-medium text-gray-500">Interviews</p>
                <p className="text-3xl font-bold text-gray-800">5</p>
                <div className="mt-2 text-green-600 text-sm">↑ 3 from last month</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-sm font-medium text-gray-500">Rejections</p>
                <p className="text-3xl font-bold text-gray-800">3</p>
                <div className="mt-2 text-gray-500 text-sm">7 still pending</div>
              </div>
            </div>
            
            {/* Recent Applications */}
            <div className="bg-white shadow rounded-lg mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">Recent Applications</h3>
              </div>
              <div className="overflow-hidden overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Step</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            GM
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Google</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Software Engineer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 1, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Follow up on Mar 8</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            MS
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Microsoft</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Frontend Developer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 28, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Interview
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Interview on Mar 10</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            AM
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Amazon</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full Stack Developer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 25, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Rejected
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                  View all applications →
                </button>
              </div>
            </div>
            
            {/* AI Suggestions */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">AI Suggestions</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-md">
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">✨ Suggestion:</span> Based on your application to Microsoft, consider highlighting your React experience more prominently in your CV.
                  </p>
                </div>
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-md">
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">📈 Insight:</span> Applications with custom cover letters get 40% more responses. Try adding more personalization to your emails.
                  </p>
                </div>
                <div className="p-4 border border-green-200 bg-green-50 rounded-md">
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">🔍 Opportunity:</span> We found 3 new job openings that match your profile. Click here to review them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'dashboard' && (
          <div className="p-6 text-center text-gray-500">
            <p>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content would appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}