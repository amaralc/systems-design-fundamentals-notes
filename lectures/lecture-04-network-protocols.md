# Network Protocols

Lecture Source: https://www.algoexpert.io/systems/fundamentals


## Statistics

- Video duration: 00h28m33s
- Total duration: 01h09m00s (video + notes + structure);
- Ratio: 2.4/1


## Notes

There are many protocols, but for this context, three of them are highlighted: IP, TCP, HTTP;

- IP [(Internet Protocol)](https://en.wikipedia.org/wiki/Internet_Protocol):
  - Modern internet operates following the Internet Protocol;
  - Machine sends data in the form of IP Packets;
    - IP Packets:
      - Building blocks of communication between machines over the internet;
      - Made up of bytes;
      - 2^16 bytes (65536 bytes);
      - Have two main sections: IP Header and Data;
    - IP Packet Header:
      - Contains useful information about the packet;
        - Source IP address;
        - Destination IP address;
        - Total size of the packet;
        - Version of the Internet Protocol that the packet is operating by;
    - IP Packet Data:
      - Might not fit into 2^16 bytes;
      - Get split into multiple packets;
      - Is formed by:
        - TCP Header;
          - Contains information about the order of the packets;
        - Data;
  - There are many versions of the IP Protocol. Currently we have:
    - IP v4 (used by most machines today);
    - IP v6 (becoming more popular);
  - IP protocol alone does not guarantee:
    - That the packets are actually transmited;
    - The order of the packets;
    - That packets do not get lost;
- TCP (Transmission Control Protocol):
  - Ensure that IP Packets:
    - Are received (or at least tell which of them were not received);
    - Get received in order;
    - Allows to send arbitrarely long pieces of data to other machines;
  - Is built on top of IP;
  - When a client wants to connect with a server, it stablishes a TCP connection through what is known as a handshake:
    - Handshake: 
      - Special TCP interaction;
        - Machine 1: send a packet trying to stablish connection ("can we connect?");
        - Machine 2: responds ("ok, we can connect");
        - Machine 1: re-responds ("ok we have stablished a connection");
      - If one machine doesn't send packets for a period, the connection is timed out;
      - Any machine can end the connection by sending a special message;
  - Lacks robust framework that engineers can use to really define meningful and easy to use communication channels for clients and servers in a system;
    - This is where HTTP fits;
- HTTP (Hypertext Transfer Protocol):
  - Offer higher level abstraction;
    - Request/Response paradigm (objects with certain properties);
      - Machine 1: sends request;
      - Machine 2: sends response;
    - Communication rules;
    - Let us forget about IP and TCP, and focus on requests and responses;
  - Request (some of the important properties): 
    - host: describe destination server;
    - port: describe process in destination server;
    - method: describe the purpose of the request;
    - paths: points to resources in that process and starts to separate logic in the server;
    - headers: collection of key value pairs that contain important metadata;
    - body: data that request is sending;
  - Response: (some of the importent properties):
    - statusCode: describe the type of response (there are specific status codes to mean different things);
    - headers;
    - body;

## Prerequisites

<ul>
  <li>
    <h4>Client</h4>
    <div>
      <div>
        <p>A machine or process that requests data or service from a server.</p>
        <p>
          Note that a single machine or piece of software can be both a client
          and a server at the same time. For instance, a single machine could
          act as a server for end users and as a client for a database.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>Server</h4>
    <div>
      <div>
        <p>
          A machine or process that provides data or service for a client,
          usually by listening for incoming network calls.
        </p>
        <p>
          Note that a single machine or piece of software can be both a client
          and a server at the same time. For instance, a single machine could
          act as a server for end users and as a client for a database.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>IP Address</h4>
    <div>
      <div>
        <p>
          An address given to each machine connected to the public internet.
          IPv4 addresses consist of four numbers separated by dots:
          <b>a.b.c.d</b> where all four numbers are between 0 and 255. Special
          values include:
        </p>
        <ul>
          <li>
            <b>127.0.0.1</b>: Your own local machine. Also referred to as
            <b>localhost</b>.
          </li>
          <li>
            <b>192.168.x.y</b>: Your private network. For instance, your machine
            and all machines on your private wifi network will usually have the
            <b>192.168</b> prefix.
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>


## Key Terms

<ul>
  <li>
    <h4>IP</h4>
    <div>
      <div>
        <p>
          Stands for <b>Internet Protocol</b>. This network protocol outlines
          how almost all machine-to-machine communications should happen in the
          world. Other protocols like <b>TCP</b>, <b>UDP</b> and <b>HTTP</b> are
          built on top of IP.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>TCP</h4>
    <div>
      <div>
        <p>
          Network protocol built on top of the Internet Protocol (IP). Allows
          for ordered, reliable data delivery between machines over the public
          internet by creating a <b>connection</b>.
        </p>
        <p>
          TCP is usually implemented in the kernel, which exposes
          <b>sockets</b> to applications that they can use to stream data
          through an open connection.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>HTTP</h4>
    <div>
      <div>
        <p>
          The <b>H</b>yper<b>T</b>ext <b>T</b>ransfer <b>P</b>rotocol is a very
          common network protocol implemented on top of TCP. Clients make HTTP
          requests, and servers respond with a response.
        </p>
        <p>Requests typically have the following schema: <br /></p>
        <pre>host: string (example: algoexpert.io)
  port: integer (example: 80 or 443)
  method: string (example: GET, PUT, POST, DELETE, OPTIONS or PATCH)
  headers: <key, value=""> pair list (example: "Content-Type" =&gt; "application/json")
  body: opaque sequence of bytes</key,></pre>
        <p></p>
        <p>Responses typically have the following schema: <br /></p>
        <pre>status code: integer (example: 200, 401)
  headers: <key, value=""> pair list (example: "Content-Length" =&gt; 1238)
  body: opaque sequence of bytes</key,></pre>
        <p></p>
      </div>
    </div>
  </li>
  <li>
    <h4>IP Packet</h4>
    <div>
      <div>
        <p>
          Sometimes more broadly referred to as just a (network) <b>packet</b>,
          an IP packet is effectively the smallest unit used to describe data
          being sent over <b>IP</b>, aside from bytes. An IP packet consists of:
        </p>
        <ul>
          <li>
            an <b>IP header</b>, which contains the source and destination
            <b>IP addresses</b> as well as other information related to the
            network
          </li>
          <li>
            a <b>payload</b>, which is just the data being sent over the network
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>
