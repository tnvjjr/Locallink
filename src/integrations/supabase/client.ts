// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xyaslwnfvspukofxcasz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5YXNsd25mdnNwdWtvZnhjYXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NzIzNDMsImV4cCI6MjA1OTQ0ODM0M30.vnaGHiXbX9wkSet_p0gXtCiuQ_yrzXcH2G7Aautb0nM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);