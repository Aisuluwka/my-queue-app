"use client";

import { useEffect, useState } from "react";
import "./globals.css";

interface QueueItem {
  id: number;
  name: string;
  createdAt: string;
}

export default function Home() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const fetchQueue = async () => {
    const res = await fetch("/api/queue");
    const data = await res.json();
    setQueue(data);
  };

  const addToQueue = async () => {
    if (!name.trim()) return;
    await fetch("/api/queue", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    setName("");
    fetchQueue();
  };

  const deleteItem = async (id: number) => {
    await fetch(`/api/queue/${id}`, { method: "DELETE" });
    fetchQueue();
  };

  const startEdit = (item: QueueItem) => {
    setEditId(item.id);
    setEditName(item.name);
  };

  const saveEdit = async () => {
    await fetch(`/api/queue/${editId}`, {
      method: "PUT",
      body: JSON.stringify({ name: editName }),
      headers: { "Content-Type": "application/json" },
    });
    setEditId(null);
    setEditName("");
    fetchQueue();
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Очередь</h1>

      <ul className="mb-4 space-y-2">
        {queue.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            {editId === item.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="border p-1"
                />
                <button onClick={saveEdit} className="text-green-600">
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-700">
                  {item.name} —{" "}
                  {new Date(item.createdAt).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}{" "}
                  в{" "}
                  {new Date(item.createdAt).toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>

                <button
                  onClick={() => startEdit(item)}
                  className="text-blue-600"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-600"
                >
                  🗑️
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          className="border p-2"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={addToQueue}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Добавить
        </button>
      </div>
    </main>
  );
}
