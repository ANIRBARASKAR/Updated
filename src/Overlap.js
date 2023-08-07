import React from 'react';

const CourseFeaturesList = () => {
  return (
    <div className="rounded-md border border-gray-300 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg p-4 mx-auto max-w-md">
      <div className="text-center text-white text-lg font-bold bg-blue-500 p-3 rounded-t-md">
        Course Features
      </div>
      <div className="border-b border-gray-300 py-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex items-center">
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/calendar-alt.svg"
              alt="Frequency Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="font-bold text-gray-800">Frequency</div>
          </div>
          <div className="text-gray-600">
            <p>3-4 days a week for weekdays</p>
            <p>2 days a week for weekends: Saturday &amp; Sunday</p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 py-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex items-center">
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/calendar-day.svg"
              alt="Batch Starting On Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="font-bold text-gray-800">Batch Starting On</div>
          </div>
          <div className="text-gray-600">
            <p>24th March, 2023</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/calendar-check.svg"
              alt="Batch Ending On Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="font-bold text-gray-800">Batch Ending On</div>
          </div>
          <div className="text-gray-600">
            <p>31st December, 2026</p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 py-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex items-center">
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/clock.svg"
              alt="Class Timings Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="font-bold text-gray-800">Class Timings</div>
          </div>
          <div className="text-gray-600">
            <p>3-4 days weekdays</p>
            <p>6 hrs/day for weekends</p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 py-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex items-center">
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/file-alt.svg"
              alt="Tests During Course Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="font-bold text-gray-800">Tests During Course</div>
          </div>
          <div className="text-gray-600">
            <h5>During Class IX &amp; X:</h5>
            <ul>
              <li>Fortnightly Subjective Tests</li>
              <li>Term Exams</li>
              <li>AIATS</li>
              <li>NTSE Test Series</li>
              <li>Olympiad Pattern Tests</li>
            </ul>
            <h5>During Class XI &amp; XII:</h5>
            <ul>
              <li>Fortnightly Tests</li>
              <li>Term Exams</li>
              <li>Subjective Tests</li>
              <li>AIATS</li>
              <li>SMTS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 py-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex items-center">
            <img
              src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/user-graduate.svg"
              alt="Eligibility Icon"
              className="w-6 h-6 mr-2"
            />
            <div className="font-bold text-gray-800">Eligibility</div>
          </div>
          <div className="text-gray-600">
            <p>Students studying in class VIII and moving to class IX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeaturesList;
