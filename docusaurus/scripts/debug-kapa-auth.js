// scripts/debug-kapa-auth.js
const axios = require('axios');
require('dotenv').config();

/**
 * Debug script to test Kapa API authentication
 */
async function debugKapaAuth() {
  console.log('🔍 Kapa API Authentication Debug\n');
  
  // Check environment variables
  const token = process.env.KAPA_API_TOKEN;
  const projectId = process.env.KAPA_PROJECT_ID;
  
  console.log('📋 Environment Check:');
  console.log(`- KAPA_API_TOKEN: ${token ? '✅ Set (' + token.length + ' chars)' : '❌ Not set'}`);
  console.log(`- KAPA_PROJECT_ID: ${projectId ? '✅ Set (' + projectId + ')' : '❌ Not set'}`);
  
  if (!token || !projectId) {
    console.log('\n❌ Missing required environment variables');
    console.log('💡 Make sure to set both KAPA_API_TOKEN and KAPA_PROJECT_ID');
    return;
  }
  
  console.log(`\n🔑 Token format check:`);
  console.log(`- Starts with: ${token.substring(0, 4)}...`);
  console.log(`- Length: ${token.length} characters`);
  console.log(`- Contains spaces: ${token.includes(' ') ? '⚠️ YES (this might be a problem)' : '✅ No'}`);
  console.log(`- Contains newlines: ${token.includes('\n') ? '⚠️ YES (this might be a problem)' : '✅ No'}`);
  
  // Test different authentication methods
  const testUrl = `https://api.kapa.ai/query/v1/projects/${projectId}/chat/`;
  const testPayload = {
    query: "Hello, this is a test query to verify authentication.",
    user_data: { source: 'auth-debug' }
  };
  
  console.log(`\n🌐 Testing API endpoint: ${testUrl}`);
  
  // Method 1: Bearer token
  console.log('\n🧪 Test 1: Bearer Authentication');
  try {
    const response = await axios.post(testUrl, testPayload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Kapa-Auth-Debug/1.0'
      },
      timeout: 30000,
      validateStatus: () => true // Don't throw on any status
    });
    
    console.log(`- Status: ${response.status}`);
    console.log(`- Response:`, JSON.stringify(response.data, null, 2));
    
    if (response.status === 200) {
      console.log('✅ Bearer authentication successful!');
      return;
    } else if (response.status === 401) {
      console.log('❌ Authentication failed - invalid token');
    } else if (response.status === 403) {
      console.log('❌ Authentication failed - insufficient permissions');
    } else if (response.status === 404) {
      console.log('❌ Project not found - check your project ID');
    }
    
  } catch (error) {
    console.log(`❌ Request failed: ${error.message}`);
  }
  
  // Method 2: X-API-Key header
  console.log('\n🧪 Test 2: X-API-Key Authentication');
  try {
    const response = await axios.post(testUrl, testPayload, {
      headers: {
        'X-API-Key': token,
        'Content-Type': 'application/json',
        'User-Agent': 'Kapa-Auth-Debug/1.0'
      },
      timeout: 30000,
      validateStatus: () => true
    });
    
    console.log(`- Status: ${response.status}`);
    console.log(`- Response:`, JSON.stringify(response.data, null, 2));
    
    if (response.status === 200) {
      console.log('✅ X-API-Key authentication successful!');
      return;
    }
    
  } catch (error) {
    console.log(`❌ Request failed: ${error.message}`);
  }
  
  // Method 3: Token header
  console.log('\n🧪 Test 3: Token Header Authentication');
  try {
    const response = await axios.post(testUrl, testPayload, {
      headers: {
        'Token': token,
        'Content-Type': 'application/json',
        'User-Agent': 'Kapa-Auth-Debug/1.0'
      },
      timeout: 30000,
      validateStatus: () => true
    });
    
    console.log(`- Status: ${response.status}`);
    console.log(`- Response:`, JSON.stringify(response.data, null, 2));
    
    if (response.status === 200) {
      console.log('✅ Token header authentication successful!');
      return;
    }
    
  } catch (error) {
    console.log(`❌ Request failed: ${error.message}`);
  }
  
  // Test if it's a general connectivity issue
  console.log('\n🧪 Test 4: Basic connectivity check');
  try {
    const response = await axios.get('https://api.kapa.ai/', {
      timeout: 10000,
      validateStatus: () => true
    });
    
    console.log(`- Kapa API base URL status: ${response.status}`);
    
    if (response.status >= 500) {
      console.log('⚠️ Kapa API appears to be having issues');
    } else {
      console.log('✅ Kapa API is reachable');
    }
    
  } catch (error) {
    console.log(`❌ Cannot reach Kapa API: ${error.message}`);
    console.log('⚠️ This might be a network connectivity issue');
  }
  
  console.log('\n📞 Troubleshooting suggestions:');
  console.log('1. Verify your token is copied correctly (no extra spaces/newlines)');
  console.log('2. Check if your token has expired');
  console.log('3. Ensure your token has access to the specified project');
  console.log('4. Try regenerating your API token in the Kapa dashboard');
  console.log('5. Contact Kapa support if none of the authentication methods work');
  
  console.log('\n🔗 Useful resources:');
  console.log('- Kapa API Documentation: https://docs.kapa.ai/');
  console.log('- Kapa Dashboard: https://app.kapa.ai/');
}

// Run if executed directly
if (require.main === module) {
  debugKapaAuth().catch(console.error);
}

module.exports = { debugKapaAuth };