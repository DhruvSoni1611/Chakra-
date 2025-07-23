// import { Task } from "@/state/api";
// import { format } from "date-fns";
// import Image from "next/image";
// import React from "react";

// type Props = {
//   task: Task;
// };

// const TaskCard = ({ task }: Props) => {
//   return (
//     <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
//       {task.attachments && task.attachments.length > 0 && (
//         <div>
//           <strong>Attachments:</strong>
//           <div className="flex flex-wrap">
//             {task.attachments && task.attachments.length > 0 && (
//               <Image
//                 src={`https://chakra-s3-images.s3.us-east-1.amazonaws.com/${task.attachments[0].fileURL}`}
//                 alt={task.attachments[0].fileName}
//                 width={400}
//                 height={200}
//                 className="rounded-md"
//               />
//             )}
//           </div>
//         </div>
//       )}
//       <p>
//         <strong>ID:</strong> {task.id}
//       </p>
//       <p>
//         <strong>Title:</strong> {task.title}
//       </p>
//       <p>
//         <strong>Description:</strong>{" "}
//         {task.description || "No description provided"}
//       </p>
//       <p>
//         <strong>Status:</strong> {task.status}
//       </p>
//       <p>
//         <strong>Priority:</strong> {task.priority}
//       </p>
//       <p>
//         <strong>Tags:</strong> {task.tags || "No tags"}
//       </p>
//       <p>
//         <strong>Start Date:</strong>{" "}
//         {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
//       </p>
//       <p>
//         <strong>Due Date:</strong>{" "}
//         {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
//       </p>
//       <p>
//         <strong>Author:</strong>{" "}
//         {task.author ? task.author.username : "Unknown"}
//       </p>
//       <p>
//         <strong>Assignee:</strong>{" "}
//         {task.assignee ? task.assignee.username : "Unassigned"}
//       </p>
//     </div>
//   );
// };

// export default TaskCard;

import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments.length > 0 && (
        <div className="mb-3">
          <strong>Attachments:</strong>
          <div className="flex flex-wrap mt-2">
            {!imageError ? (
              <Image
                src={`https://chakra-s3-images.s3.us-east-1.amazonaws.com/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md"
                onError={() => setImageError(true)}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            ) : (
              <div className="w-[400px] h-[200px] bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Failed to load image
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        <p>
          <strong>ID:</strong> {task.id}
        </p>
        <p>
          <strong>Title:</strong> {task.title}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {task.description || "No description provided"}
        </p>
        <p>
       <strong>Status:</strong> {task.status}
       </p>
        <p>
          <strong>Priority:</strong>
          <span className={`ml-2 px-2 py-1 rounded text-xs ${
            task.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
          }`}>
            {task.priority}
          </span>
        </p>
        <p>
          <strong>Tags:</strong> {task.tags || "No tags"}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
        </p>
        <p>
          <strong>Due Date:</strong>{" "}
          {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
        </p>
        <p>
          <strong>Author:</strong>{" "}
          {task.author ? task.author.username : "Unknown"}
        </p>
        <p>
          <strong>Assignee:</strong>{" "}
          {task.assignee ? task.assignee.username : "Unassigned"}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;