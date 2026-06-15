// functions/api/generate.js
export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Check API key exists
    const apiKey = context.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({
        error: 'MISSING_API_KEY',
        detail: 'ANTHROPIC_API_KEY environment variable not found'
      }), { status: 500, headers: corsHeaders });
    }

    const body = await context.request.json();

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model:      body.model      || 'claude-sonnet-4-6',
        max_tokens: body.max_tokens || 1000,
        messages:   body.messages,
      }),
    });

    // Return raw status + body so we can see any Anthropic errors
    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({
        error: 'ANTHROPIC_ERROR',
        status: response.status,
        detail: data
      }), { status: response.status, headers: corsHeaders });
    }

    return new Response(JSON.stringify(data), { headers: corsHeaders });

  } catch (err) {
    return new Response(JSON.stringify({
      error: 'WORKER_EXCEPTION',
      detail: err.message,
      stack: err.stack
    }), { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
