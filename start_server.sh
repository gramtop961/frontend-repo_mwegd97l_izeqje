#!/bin/bash
echo "Starting frontend server..."

# Kill existing server using PID file
if [ -f server.pid ]; then
  OLD_PID=$(cat server.pid)
  if ps -p $OLD_PID > /dev/null 2>&1; then
    echo "Stopping existing server (PID: $OLD_PID)..."
    kill $OLD_PID
    sleep 2
    # Force kill if still running
    if ps -p $OLD_PID > /dev/null 2>&1; then
      kill -9 $OLD_PID
    fi
  fi
  rm -f server.pid
fi

mkdir -p logs
echo "Installing dependencies..."
npm install
echo "Starting dev server..."
nohup npm run dev > logs/server.log 2>&1 &
SERVER_PID=$!
echo $SERVER_PID > server.pid
echo "Server started in background, PID: $SERVER_PID (saved to server.pid)"
sleep 3
if ps -p $SERVER_PID > /dev/null 2>&1; then
  echo "Server is running successfully"
else
  echo "Warning: Server process may have failed to start"
fi
