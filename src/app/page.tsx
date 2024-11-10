'use client'

import { useState } from 'react'
import { Search, MoreVertical, Home, BarChart2, PlusCircle, MessageCircle, User } from 'lucide-react'

const folders = [
  { name: 'Marketing Materials', items: 43 },
  { name: 'Project Documentation', items: 124 },
  { name: 'Client Correspondence', items: 235 },
  { name: 'Educational Resources', items: 1346 },
  { name: 'Travel Memories', items: 3245 },
  { name: 'Event Planning', items: 23 },
  { name: 'Personal Photos', items: 2824 },
  { name: 'Employee Records', items: 54 },
]

const files = [
  { name: 'Social Media Campaign.png', date: 'April 24, 2022', size: '24 MB' },
  { name: 'Marketing Strategy.docx', date: 'July 15, 2023', size: '123 KB' },
  { name: 'Promo Videos.mp4', date: 'August 10, 2022', size: '129 MB' },
  { name: 'Email Campaign Templates.jpg', date: 'February 7, 2023', size: '792 KB' },
  { name: 'Brand Background.flac', date: 'November 20, 2022', size: '192 KB' },
  { name: 'Event Flyers.png', date: 'November 26, 2022', size: '1.92 KB' },
]

export default function Filehub() {
  const [activeTab, setActiveTab] = useState('folders')

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <h1 className="text-2xl font-bold mb-8">Filehub.</h1>
        <div className="space-y-4">
          {['Home', 'Recent', 'Starred', 'Trash'].map((item) => (
            <div key={item} className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
              <Home className="w-5 h-5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              <BarChart2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          <button
            className={`px-4 py-2 ${activeTab === 'folders' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('folders')}
          >
            Folders
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'files' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('files')}
          >
            Files
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {activeTab === 'folders' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {folders.map((folder) => (
                <div key={folder.name} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 p-2 rounded">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{folder.name}</h3>
                      <p className="text-sm text-gray-400">{folder.items} items</p>
                    </div>
                  </div>
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {files.map((file) => (
                <div key={file.name} className="bg-gray-800 p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-700 p-2 rounded">
                      <Home className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-sm text-gray-400">{file.date} • {file.size}</p>
                    </div>
                  </div>
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom navigation */}
        <div className="bg-gray-800 p-4 flex justify-around">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            <Home className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            <BarChart2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600">
            <PlusCircle className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}